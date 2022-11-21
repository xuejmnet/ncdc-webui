<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
import { computed, defineEmits, ref } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formSchema } from './actual-table.data';
import { createActualTable, getActualDataSourceAll } from '/@/api/db/db'
const emit = defineEmits(["success", "register"])


const params = ref<Recordable>({});

const [registerForm, { resetFields, setFieldsValue, validate,updateSchema }] = useForm({
  labelWidth: 100,
  baseColProps: { span: 24 },
  schemas: formSchema,
  showActionButtonGroup: false,
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields();
  setModalProps({ confirmLoading: false });

  params.value.logicDatabaseId = data.logicDatabaseId;
  params.value.logicDatabaseName = data.logicDatabaseName;

  params.value.logicTableId = data.logicTableId;
  params.value.logicTableName = data.logicTableName;

  setFieldsValue({
    logicDatabaseName: data?.logicDatabaseName,
    logicTableName: data?.logicTableName
  });




  const dataSources = await getActualDataSourceAll({ logicDatabaseId: params.value.logicDatabaseId });
  let ds = dataSources.map(o => {
    return {
      label: o.dataSourceName,
      value: o.id,
      key: o.id
    }
  })
  updateSchema([
    {
      field: 'dataSourceId',
      componentProps: {
        options: [...ds
        ]
      }
    },
  ]);
});

const getTitle = computed(() => ('新增实际表'));

async function handleSubmit() {
  try {
    const values = await validate();

    values.logicDatabaseId = params.value.logicDatabaseId;
    values.logicTableId = params.value.logicTableId;

    setModalProps({ confirmLoading: true });


    await createActualTable(values);

    closeModal();
    emit('success');
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
