import {
  DatabasePageResultModel,
  DatabaseQueryPageParams
} from './model/dbModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  DatabasePage = '/api/logicDatabase/page',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  RolePageList = '/system/getRoleListByPage',
  GetAllRoleList = '/system/getAllRoleList',
}

export const getDatabasePage = (params?: DatabaseQueryPageParams) =>{
  console.log(params)
  return defHttp.get<DatabasePageResultModel>({ url: Api.DatabasePage, params });
}
