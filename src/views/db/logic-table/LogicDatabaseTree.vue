<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree title="数据库列表" toolbar search treeWrapperClassName="h-[calc(100%-35px)] overflow-auto"
      :clickRowToExpand="false" ref="treeRef" :treeData="treeData"  :fieldNames="{ key: 'id', title: 'databaseName' }"
      @select="handleSelect" />
  </div>
</template>
<script lang="ts"  setup>
import { onMounted, ref, defineEmits } from 'vue';

import { BasicTree, TreeActionType, TreeItem } from '/@/components/Tree';
import { logicDatabases } from '/@/api/db/db';
const emit = defineEmits(["select"])
const treeData = ref<TreeItem[]>([]);
  const treeRef = ref<Nullable<TreeActionType>>(null);
async function fetch() {
  treeData.value = (await logicDatabases()) as unknown as TreeItem[];
  if(treeData.value&&treeData.value.length>0){
    if(treeRef.value){
      treeRef.value.setSelectedKeys([treeData.value[0].id]);
      handleSelect([treeData.value[0].id])
    }
  }
}

function handleSelect(keys) {
  if (keys.length > 0) {
    let item = treeData.value.find(o => o.id == keys[0]);
    let database=(item as any)
    
    emit('select', {id:database.id,databaseName:database.databaseName});
  }
}

onMounted(() => {
  fetch();
});
</script>
<style scoped>
:deep() .ant-tree-switcher{
  width: 0 !important;
}
</style>
