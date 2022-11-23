import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

// id: string;
// databaseName: string;
// autoUseWriteConnectionStringAfterWriteDb: boolean;
// throwIfQueryRouteNotMatch: boolean;
// maxQueryConnectionsLimit: number;
// connectionMode: number;
export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    width: 80,
  },
  {
    title: '密码',
    dataIndex: 'password',
    width: 80,
  },
  {
    title: '限制地址',
    dataIndex: 'hostName',
    width: 80,
  },
  {
    title: '是否启用',
    dataIndex: 'isEnable',
    width: 50,
    customRender: ({ record }) => {
      // if (!Reflect.has(record, 'autoUseWriteConnectionStringAfterWriteDb')) {
      //   record.autoUseWriteConnectionStringAfterWriteDb = false;
      // }
      return record.isEnable?'是':'否';
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  }
];

export const formSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    required: true,
  },
  {
    field: 'password',
    label: '密码',
    component: 'Input',
    required: true,
  },
  {
    field: 'hostName',
    label: '限制地址',
    component: 'Input',
    required: true,
    defaultValue:'%'
  },
  {
    field: 'isEnable',
    label: '是否启用',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    defaultValue:true
  }
];

export const formRelationSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    required: true,
    componentProps:{
      disabled:true
    }
  },
  {
    field: 'databases',
    label: '关联的数据库',
    component: 'CheckboxGroup',
  }
];
