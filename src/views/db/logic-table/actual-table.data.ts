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
    title: '实际表名',
    dataIndex: 'tableName',
    width: 80,
    ellipsis: true
  },
  {
    title: '数据源',
    dataIndex: 'dataSourceName',
    width: 80,
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 80,
  },
];

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
    field: 'logicTableName',
    label: '逻辑表名',
    component: 'Input',
    componentProps:{
      disabled:true
    }
  },
  {
    field: 'tableName',
    label: '实际表名',
    component: 'Input',
    required:true
  },
  {
    field: 'dataSourceId',
    label: '数据源',
    component: 'Select',
    required:true
  }
];
