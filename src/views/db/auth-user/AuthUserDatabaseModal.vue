<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
import { ref, computed, defineEmits } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formRelationSchema } from './auth-user.data';
import { getAuthUserDatabases, getAuthUserDatabaseSave } from '/@/api/db/db'
const emit = defineEmits(["success", "register"])


const id = ref('');


const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
  labelWidth: 100,
  baseColProps: { span: 24 },
  schemas: formRelationSchema,
  showActionButtonGroup: false,
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields();
  setModalProps({ confirmLoading: false });
  id.value = data.record.id
  let result = await getAuthUserDatabases({ id: id.value })

  setFieldsValue({
    ...data.record,
    databases: result.checkedDatabases
  });

  updateSchema({
    field: 'databases',
    componentProps: {
      options: result.allDatabases.map(o => {
        return { label: o.databaseName, value: o.id }
      })
    }
  })
});

const getTitle = computed(() => ('选择登录的数据库'));

async function handleSubmit() {
  try {
    const values = await validate();
    setModalProps({ confirmLoading: true });

    await getAuthUserDatabaseSave({
      checkedDatabases: values.databases,
      id: id.value
    })
    closeModal();
    emit('success');
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
