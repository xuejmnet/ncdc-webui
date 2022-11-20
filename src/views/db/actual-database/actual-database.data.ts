import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Input, Tag } from 'ant-design-vue';


// id: string;
// logicDatabaseName: string;
// dataSourceName:string;
// connectionString: string;
// isDefault: boolean;
// createTime:string;
// updateTime:string;
export const columns: BasicColumn[] = [
  {
    title: '数据源',
    dataIndex: 'dataSourceName',
    width: 40,
  },
  {
    title: '是否默认',
    dataIndex: 'isDefault',
    width: 40,
    customRender: ({ record }) => {
      return record.isDefault?'是':'否';
    },
  },
  {
    title: '链接字符串',
    dataIndex: 'connectionString',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 80,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'dataSourceName',
    label: '数据源名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

// logicDatabaseName: string;
// dataSourceName:string;
// connectionString: string;
// isDefault: boolean;
// createTime:string;
// updateTime:string;
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
    field: 'dataSourceName',
    label: '数据源名称',
    component: 'Input',
    required:true
  },
  {
    field: 'connectionString',
    label: '链接字符串',
    component: 'Input',
    required:true
  },
  {
    field: 'isDefault',
    label: '是否默认',
    component: 'Switch',
    defaultValue:false
  }
];
