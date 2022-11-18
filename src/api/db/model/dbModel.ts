import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';


export type DatabaseQueryParams = {
  databaseName?: string;
};

export type DatabaseQueryPageParams = BasicPageParams & DatabaseQueryParams;

export interface DatabasPageModel {
  id: string;
  databaseName: string;
  autoUseWriteConnectionStringAfterWriteDb: boolean;
  throwIfQueryRouteNotMatch: boolean;
  maxQueryConnectionsLimit: number;
  connectionMode: number;
  createTime:string;
  updateTime:string;
}


export type DatabasePageResultModel = BasicFetchResult<DatabasPageModel>;
