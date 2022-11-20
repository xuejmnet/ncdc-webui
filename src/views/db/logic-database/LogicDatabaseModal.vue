<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
import { ref, computed, unref, defineEmits } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formSchema } from './logic-database.data';
import { createLogicDatabase, udpateLogicDatabase } from '/@/api/db/db'
const emit = defineEmits(["success", "register"])


const isUpdate = ref(true);
const id = ref('');


const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
  labelWidth: 100,
  baseColProps: { span: 24 },
  schemas: formSchema,
  showActionButtonGroup: false,
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields();
  setModalProps({ confirmLoading: false });
  isUpdate.value = !!data?.isUpdate;
  if (unref(isUpdate)) {
    id.value = data.record.id
    setFieldsValue({
      ...data.record,
    });
  }
});

const getTitle = computed(() => (!unref(isUpdate) ? '新增逻辑数据库' : '编辑逻辑数据库'));

async function handleSubmit() {
  try {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    console.log(id.value);
    if (unref(isUpdate)) {
      values.id = id.value;
      await udpateLogicDatabase(values)
    } else {
      await createLogicDatabase(values);
    }
    closeModal();
    emit('success');
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
