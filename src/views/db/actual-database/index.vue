<template>
  <PageWrapper dense contentFullHeight  contentClass="flex">
    <LogicDatabaseTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo" >
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增实际数据库 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
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
    <ActualDatabaseModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
import {  reactive } from 'vue';
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { deleteActualDatabase,getActualDatabasePage } from '/@/api/db/db';

import { PageWrapper } from '/@/components/Page';
import { useModal } from '/@/components/Modal';
import { useLoading } from '/@/components/Loading';
import ActualDatabaseModal from './ActualDatabaseModal.vue';
import LogicDatabaseTree from './LogicDatabaseTree.vue';

import { columns, searchFormSchema } from './actual-database.data';
const [openFullLoading, closeFullLoading] = useLoading({
  tip: '加载中...',
});

const searchInfo = reactive<Recordable>({});
const [registerModal, { openModal }] = useModal();
const [registerTable, { reload }] = useTable({
  title: '实际数据库列表',
  api: getActualDatabasePage,
  columns,
  formConfig: {
    labelWidth: 120,
    schemas: searchFormSchema,
  },
  immediate:false,
  useSearchForm: true,
  showTableSetting: true,
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
    isUpdate: false,
    logicDatabaseName:searchInfo.logicDatabaseName
  });
}

function handleEdit(record: Recordable) {
  openModal(true, {
    record,
    isUpdate: true,
  });
}

async function handleDelete(record: Recordable) {

  openFullLoading();
  try {
    await deleteActualDatabase(record.id)
    reload();
  } finally {
    closeFullLoading();
  }

}

function handleSuccess() {
  reload();
}
function handleSelect(logicDatabaseName='') {
  searchInfo.logicDatabaseName=logicDatabaseName;
  
  reload();
}

</script>
