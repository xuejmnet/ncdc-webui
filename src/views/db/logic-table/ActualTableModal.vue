<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
import { computed, defineEmits } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formSchema } from './actual-table.data';
import { createLogicTable } from '/@/api/db/db'
const emit = defineEmits(["success", "register"])



const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
  labelWidth: 100,
  baseColProps: { span: 24 },
  schemas: formSchema,
  showActionButtonGroup: false,
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields();
  setModalProps({ confirmLoading: false });
  
  setFieldsValue({
      logicDatabaseName: data?.logicDatabaseName,
      logicTableName: data?.logicTableName
    });
});

const getTitle = computed(() => ('新增实际表'));

async function handleSubmit() {
  try {
    const values = await validate();

    setModalProps({ confirmLoading: true });

    
    await createLogicTable(values);

    closeModal();
    emit('success');
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
