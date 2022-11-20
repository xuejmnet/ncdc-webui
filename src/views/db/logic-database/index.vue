<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增逻辑数据库 </a-button>
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
    <LogicDatabaseModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getLogicDatabasePage, deleteLogicDatabase } from '/@/api/db/db';

import { useModal } from '/@/components/Modal';
import { useLoading } from '/@/components/Loading';
import LogicDatabaseModal from './LogicDatabaseModal.vue';

import { columns, searchFormSchema } from './logic-database.data';
const [openFullLoading, closeFullLoading] = useLoading({
  tip: '加载中...',
});

const [registerModal, { openModal }] = useModal();
const [registerTable, { reload }] = useTable({
  title: '逻辑数据库列表',
  api: getLogicDatabasePage,
  columns,
  formConfig: {
    labelWidth: 120,
    schemas: searchFormSchema,
  },
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
    await deleteLogicDatabase(record.id)
    reload();
  } finally {
    closeFullLoading();
  }

}

function handleSuccess() {
  reload();
}

</script>
