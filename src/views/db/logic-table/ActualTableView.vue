<template>
  <div>
    <BasicTable @register="registerTable" class="w-99/100 xl:w-99/100" :searchInfo="searchInfo">
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
  </div>
</template>
<script lang="ts" setup>
import { reactive,defineProps,onMounted } from 'vue';
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getLogicTableActualTablePage, deleteLogicTable } from '/@/api/db/db';

import { useLoading } from '/@/components/Loading';

import { columns } from './actual-table.data';
const [openFullLoading, closeFullLoading] = useLoading({
  tip: '加载中...',
});

interface Props {
  record: any;
}

const props=defineProps<Props>();

const searchInfo = reactive<Recordable>({});
searchInfo.logicDatabaseName=props.record.logicDatabaseName;
searchInfo.logicTableName=props.record.tableName;
console.log(searchInfo);

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


async function handleDelete(record: Recordable) {

  openFullLoading();
  try {
    await deleteLogicTable(record.id)
    reload();
  } finally {
    closeFullLoading();
  }

}
onMounted(() => {
  reload();
  });
</script>
