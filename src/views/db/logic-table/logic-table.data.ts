import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';


// id: string;
// createTime:string;
// updateTime:string;
// logicDatabaseName: string;
// tableName:string;
// dataSourceRule: string;
// dataSourceRuleParam: string;
// tableRule: string;
// tableRuleParam: string;
export const columns: BasicColumn[] = [
  {
    title: '逻辑表名',
    dataIndex: 'tableName',
    width: 80,
  },
  {
    title: '分库规则',
    dataIndex: 'dataSourceRule',
    width: 80,
    customRender: ({ record }) => {
      return record.dataSourceRule || '------';
    },
    ellipsis: true
  },
  {
    title: '分库规则参数',
    dataIndex: 'dataSourceRuleParam',
    width: 100,
    customRender: ({ record }) => {
      return record.dataSourceRuleParam || '------';
    },
    ellipsis: true
  },
  {
    title: '分表规则',
    dataIndex: 'tableRule',
    width: 80,
    customRender: ({ record }) => {
      return record.tableRule || '------';
    },
    ellipsis: true
  },
  {
    title: '分表规则参数',
    dataIndex: 'tableRuleParam',
    width: 80,
    customRender: ({ record }) => {
      return record.tableRuleParam || '------';
    },
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 80,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'tableName',
    label: '逻辑表名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];


// id: string;
// createTime:string;
// updateTime:string;
// logicDatabaseName: string;
// tableName:string;
// dataSourceRule: string;
// dataSourceRuleParam: string;
// tableRule: string;
// tableRuleParam: string;
export const formSchema: FormSchema[] = [
  {
    field: 'logicDatabaseName',
    label: '逻辑数据库',
    component: 'Input',
    componentProps:{
      disabled:true
    }
  },
  {
    field: 'tableName',
    label: '逻辑表名',
    component: 'Input',
    required:true
  },
  {
    field: 'dataSourceRule',
    label: '分库路由',
    component: 'Input'
  },
  {
    field: 'dataSourceRuleParam',
    label: '分库路由参数',
    component: 'Input'
  },
  {
    field: 'tableRule',
    label: '分表路由',
    component: 'Input'
  },
  {
    field: 'tableRuleParam',
    label: '分表路由参数',
    component: 'Input'
  }
];
