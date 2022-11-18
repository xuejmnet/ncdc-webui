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
  },
  {
    title: '无路由匹配是否抛出异常',
    dataIndex: 'throwIfQueryRouteNotMatch',
    width: 50,
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
    field: 'deptName',
    label: '部门名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'deptName',
    label: '部门名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentDept',
    label: '上级部门',
    component: 'TreeSelect',

    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
