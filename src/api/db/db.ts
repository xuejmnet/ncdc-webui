import {
  ActualDatabasCreateModel,
  ActualDatabasePageResultModel,
  ActualDatabaseQueryPageParams,
  ActualDatabasUpdateModel,
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
  LogicTablePage = '/api/logic-table/page',
  LogicTableCreate = '/api/logic-table/create',
  LogicTableUpdate = '/api/logic-table/update',
  LogicTableDelete = '/api/logic-table/delete',
  LogicTableActualTablePage = '/api/logic-table/actual-table-page',
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


