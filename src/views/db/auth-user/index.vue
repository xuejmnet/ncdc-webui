<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增用户 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            {
              icon: 'ant-design:cluster-outlined',
              onClick: handleRelation.bind(null, record),
            },
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
    <AuthUserModal @register="registerModal" @success="handleSuccess" />
    <AuthUserDatabaseModal @register="registerRelationModal" @success="handleRelationSuccess" />
  </div>
</template>
<script lang="ts" setup>
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getAuthPage, deleteAuthUser } from '/@/api/db/db';

import { useModal } from '/@/components/Modal';
import { useLoading } from '/@/components/Loading';
import AuthUserModal from './AuthUserModal.vue';
import AuthUserDatabaseModal from './AuthUserDatabaseModal.vue';

import { columns, searchFormSchema } from './auth-user.data';
const [openFullLoading, closeFullLoading] = useLoading({
  tip: '加载中...',
});

const [registerModal, { openModal }] = useModal();
const [registerRelationModal, { openModal: openRelationModal }] = useModal();
const [registerTable, { reload }] = useTable({
  title: '登录用户列表',
  api: getAuthPage,
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
function handleRelation(record: Recordable) {
  openRelationModal(true, {
    record
  });
}

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
    await deleteAuthUser(record.id)
    reload();
  } finally {
    closeFullLoading();
  }

}

function handleSuccess() {
  reload();
}
function handleRelationSuccess() {
  reload();
}

</script>
