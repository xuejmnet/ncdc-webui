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
    title: '数据库名',
    dataIndex: 'databaseName',
    width: 80,
  },
  {
    title: '读写分离后切到写库',
    dataIndex: 'autoUseWriteConnectionStringAfterWriteDb',
    width: 50,
    customRender: ({ record }) => {
      // if (!Reflect.has(record, 'autoUseWriteConnectionStringAfterWriteDb')) {
      //   record.autoUseWriteConnectionStringAfterWriteDb = false;
      // }
      return record.autoUseWriteConnectionStringAfterWriteDb?'是':'否';
    },
  },
  {
    title: '无路由匹配是否抛出异常',
    dataIndex: 'throwIfQueryRouteNotMatch',
    width: 50,
    customRender: ({ record }) => {
      // if (!Reflect.has(record, 'throwIfQueryRouteNotMatch')) {
      //   record.throwIfQueryRouteNotMatch = false;
      // }
      return record.throwIfQueryRouteNotMatch?'是':'否';
    },
  },
  {
    title: '最大连接数',
    dataIndex: 'maxQueryConnectionsLimit',
    width: 50,
  },
  {
    title: '链接模式',
    dataIndex: 'connectionMode',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'databaseName',
    label: '数据库名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '读写自动切主库',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'databaseName',
    label: '数据库名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'autoUseWriteConnectionStringAfterWriteDb',
    label: '读写自动切主库',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    defaultValue:false
  },
  {
    field: 'throwIfQueryRouteNotMatch',
    label: '无路由抛异常',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    defaultValue:true
  },
  {
    field: 'maxQueryConnectionsLimit',
    label: '最大连接数',
    component: 'InputNumber',
    required: true,
    componentProps: {
      placeholder: '建议配置服务器cpu核心数*2'
    }
  },
  {
    field: 'connectionMode',
    label: '链接模式',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '自动', value: 2 },
        { label: '内存限制', value: 0 },
        { label: '连接数限制', value: 1 },
      ],
    },
    defaultValue:2,
    required: true,
  },
];
