import {
  ActualDatabasCreateModel,
  ActualDatabasePageResultModel,
  ActualDatabaseQueryPageParams,
  ActualDatabasUpdateModel,
  ActualDataSourceAllParams,
  ActualDataSourceListModel,
  ActualTableCreateModel,
  AuthUserCreateModel,
  AuthUserDatabasesModel,
  AuthUserDatabasesQueryParams,
  AuthUserDatabasesSaveParams,
  AuthUserPageResultModel,
  AuthUserQueryPageParams,
  AuthUserUpdateModel,
  LogicDatabasCreateModel,
  LogicDatabasePageResultModel,
  LogicDatabaseQueryPageParams,
  LogicDatabasesModel,
  LogicDatabasUpdateModel,
  LogicTableActualTablePageResultModel,
  LogicTableActualTableQueryPageParams,
  LogicTableCreateModel,
  LogicTablePageResultModel,
  LogicTableQueryPageParams,
  LogicTableUpdateModel
} from './model/dbModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  LogicDatabasePage = '/api/logic-database/page',
  LogicDatabaseCreate = '/api/logic-database/create',
  LogicDatabaseUpdate = '/api/logic-database/update',
  LogicDatabaseDelete = '/api/logic-database/delete',
  AllLogicDatabase = '/api/logic-database/all',
  ActualDatabasePage = '/api/actual-database/page',
  ActualDatabaseCreate = '/api/actual-database/create',
  ActualDatabaseUpdate = '/api/actual-database/update',
  ActualDatabaseDelete = '/api/actual-database/delete',
  ActualDatabaseAll = '/api/actual-database/all',
  LogicTablePage = '/api/logic-table/page',
  LogicTableCreate = '/api/logic-table/create',
  LogicTableUpdate = '/api/logic-table/update',
  LogicTableDelete = '/api/logic-table/delete',
  ActualTableCreate = '/api/logic-table/actual-table-create',
  LogicTableActualTablePage = '/api/logic-table/actual-table-page',
  ActualTableDelete = '/api/logic-table/actual-table-delete',
  AuthUserPage = '/api/auth-user/page',
  AuthUserCreate = '/api/auth-user/create',
  AuthUserUpdate = '/api/auth-user/update',
  AuthUserDelete = '/api/auth-user/delete',
  AuthUserDatabases = '/api/auth-user/user-databases',
  AuthUserDatabasesSave = '/api/auth-user/user-databases-save',
}
export const getAuthUserDatabaseSave = (params?: AuthUserDatabasesSaveParams) =>{
  return defHttp.post<Object>({ url: Api.AuthUserDatabasesSave, params });
}
export const getAuthUserDatabases = (params?: AuthUserDatabasesQueryParams) =>{
  return defHttp.get<AuthUserDatabasesModel>({ url: Api.AuthUserDatabases, params });
}
export const getAuthPage = (params?: AuthUserQueryPageParams) =>{
  return defHttp.get<AuthUserPageResultModel>({ url: Api.AuthUserPage, params });
}

export const createAuthUser = (params?: AuthUserCreateModel) =>{
  return defHttp.post<Object>({ url: Api.AuthUserCreate, params });
}
export const updateAuthUser = (params?: AuthUserUpdateModel) =>{
  return defHttp.post<Object>({ url: Api.AuthUserUpdate, params });
}

export const deleteAuthUser = (id: string) =>{
  return defHttp.delete<Object>({ url: `${Api.AuthUserDelete}/${id}`});
}

export const getLogicDatabasePage = (params?: LogicDatabaseQueryPageParams) =>{
  return defHttp.get<LogicDatabasePageResultModel>({ url: Api.LogicDatabasePage, params });
}


export const createLogicDatabase = (params?: LogicDatabasCreateModel) =>{
  return defHttp.post<Object>({ url: Api.LogicDatabaseCreate, params });
}
export const udpateLogicDatabase = (params?: LogicDatabasUpdateModel) =>{
  return defHttp.post<Object>({ url: Api.LogicDatabaseUpdate, params });
}

export const deleteLogicDatabase = (id: string) =>{
  return defHttp.delete<Object>({ url: `${Api.LogicDatabaseDelete}/${id}`});
}

export const logicDatabases = () =>{
  return defHttp.get<LogicDatabasesModel>({ url: Api.AllLogicDatabase});
}

export const getActualDatabasePage = (params?: ActualDatabaseQueryPageParams) =>{
  return defHttp.get<ActualDatabasePageResultModel>({ url: Api.ActualDatabasePage, params });
}


export const createActualDatabase = (params?: ActualDatabasCreateModel) =>{
  return defHttp.post<Object>({ url: Api.ActualDatabaseCreate, params });
}
export const udpateActualDatabase = (params?: ActualDatabasUpdateModel) =>{
  return defHttp.post<Object>({ url: Api.ActualDatabaseUpdate, params });
}

export const deleteActualDatabase = (id: string) =>{
  return defHttp.delete<Object>({ url: `${Api.ActualDatabaseDelete}/${id}`});
}

export const getLogicTablePage = (params?: LogicTableQueryPageParams) =>{
  return defHttp.get<LogicTablePageResultModel>({ url: Api.LogicTablePage, params });
}


export const createLogicTable = (params?: LogicTableCreateModel) =>{
  return defHttp.post<Object>({ url: Api.LogicTableCreate, params });
}

export const udpateLogicTable = (params?: LogicTableUpdateModel) =>{
  return defHttp.post<Object>({ url: Api.LogicTableUpdate, params });
}


export const deleteLogicTable = (id: string) =>{
  return defHttp.delete<Object>({ url: `${Api.LogicTableDelete}/${id}`});
}

export const getLogicTableActualTablePage = (params?: LogicTableActualTableQueryPageParams) =>{
  return defHttp.get<LogicTableActualTablePageResultModel>({ url: Api.LogicTableActualTablePage, params });
}


export const createActualTable = (params?: ActualTableCreateModel) =>{
  return defHttp.post<Object>({ url: Api.ActualTableCreate, params });
}

export const getActualDataSourceAll = (params?: ActualDataSourceAllParams) =>{
  return defHttp.get<ActualDataSourceListModel[]>({ url: Api.ActualDatabaseAll, params });
}
export const deleteActualTable = (id: string) =>{
  return defHttp.delete<Object>({ url: `${Api.ActualTableDelete}/${id}`});
}

