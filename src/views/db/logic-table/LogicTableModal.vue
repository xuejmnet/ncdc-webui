<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
import { ref, computed, unref, defineEmits } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formSchema } from './logic-table.data';
import { createLogicTable, udpateLogicTable } from '/@/api/db/db'
const emit = defineEmits(["success", "register"])

const isUpdate = ref(true);
const params = ref<Recordable>({});


const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
  labelWidth: 100,
  baseColProps: { span: 24 },
  schemas: formSchema,
  showActionButtonGroup: false,
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields();
  setModalProps({ confirmLoading: false });
  isUpdate.value = !!data?.isUpdate;
  params.value.logicDatabaseId = data.logicDatabaseId;
  params.value.logicDatabaseName = data.logicDatabaseName;
  if (unref(isUpdate)) {
    params.value.id = data.record.id;
    setFieldsValue({
      ...data.record,
      logicDatabaseName: data.logicDatabaseName
    });

  } else {
    setFieldsValue({
      logicDatabaseName: data?.logicDatabaseName
    });
  }
  updateSchema({
    field: 'tableName',
    componentProps: { disabled: unref(isUpdate) }
  });
});

const getTitle = computed(() => (!unref(isUpdate) ? '新增实际数据库' : '编辑实际数据库'));

async function handleSubmit() {
  try {
    const values = await validate();
    values.logicDatabaseId = params.value.logicDatabaseId;

    setModalProps({ confirmLoading: true });

    if (unref(isUpdate)) {
      values.id = params.value.id;
      await udpateLogicTable(values)
    } else {
      await createLogicTable(values);
    }
    closeModal();
    emit('success');
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
