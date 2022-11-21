<template>
  <div>
    <BasicTable @register="registerTable" class="w-4/4 xl:w-5/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增实际表 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                placement: 'left',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]" />
        </template>
      </template>
    </BasicTable>
    <ActualTableModal @register="registerModal"  @success="handleSuccess"/>
  </div>
</template>
<script lang="ts" setup>
import { reactive,defineProps,onMounted } from 'vue';
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getLogicTableActualTablePage, deleteActualTable } from '/@/api/db/db';
import ActualTableModal from './ActualTableModal.vue';

import { useLoading } from '/@/components/Loading';
import { useModal } from '/@/components/Modal';

import { columns } from './actual-table.data';
const [openFullLoading, closeFullLoading] = useLoading({
  tip: '加载中...',
});

interface Props {
  record: any;
}

const props=defineProps<Props>();
console.log(props.record);

const searchInfo = reactive<Recordable>({});
searchInfo.logicDatabaseId=props.record.logicDatabaseId;
searchInfo.logicTableId=props.record.id;

const [registerModal, { openModal }] = useModal();
const [registerTable, { reload }] = useTable({
  api: getLogicTableActualTablePage,
  columns,
  immediate: false,
  bordered: true,
  showIndexColumn: false,
  canResize: false,
  actionColumn: {
    width: 80,
    title: '操作',
    dataIndex: 'action',
    // slots: { customRender: 'action' },
    fixed: undefined,
  },
});

function handleCreate() {
  openModal(true, {
    logicDatabaseId:props.record.logicDatabaseId,
    logicDatabaseName:props.record.logicDatabaseName,
    logicTableId:props.record.id,
    logicTableName:props.record.tableName
  });
}

async function handleDelete(record: Recordable) {

  openFullLoading();
  try {
    await deleteActualTable(record.id)
    reload();
  } finally {
    closeFullLoading();
  }

}

function handleSuccess() {
  reload();
}
onMounted(() => {
  reload();
  });
</script>
