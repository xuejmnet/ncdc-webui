import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';


export type AuthUserDatabasesSaveParams = {
  id: string;
  checkedDatabases: Array<string>;
};
export type AuthUserDatabasesQueryParams = {
  id: string;
};
export type AuthUserDatabasesModel = {
  checkedDatabases: Array<string>;
  allDatabases: Array<AuthUserDatabasesAllModel>;
};

export type AuthUserDatabasesAllModel = {
  id: string;
  databaseName: string;
};


export type AuthUserQueryParams = {
  userName?: string;
};

export type AuthUserQueryPageParams = BasicPageParams & AuthUserQueryParams;


export interface AuthUserPageModel {
  id: string;
  userName: string;
  password: string;
  hostName: string;
  isEnable: boolean;
  createTime:string;
  updateTime:string;
}

export type AuthUserPageResultModel = BasicFetchResult<AuthUserPageModel>;



export interface AuthUserCreateModel {
  userName: string;
  password: string;
  hostName: string;
  isEnable: boolean;
}

export interface AuthUserUpdateModel {
  id: string;
  userName: string;
  password: string;
  hostName: string;
  isEnable: boolean;
}


export type DatabaseQueryParams = {
  databaseName?: string;
};

export type LogicDatabaseQueryPageParams = BasicPageParams & DatabaseQueryParams;

export interface LogicDatabasePageModel {
  id: string;
  databaseName: string;
  autoUseWriteConnectionStringAfterWriteDb: boolean;
  throwIfQueryRouteNotMatch: boolean;
  maxQueryConnectionsLimit: number;
  connectionMode: number;
  createTime:string;
  updateTime:string;
}

export interface LogicDatabasCreateModel {
  databaseName: string;
  autoUseWriteConnectionStringAfterWriteDb: boolean;
  throwIfQueryRouteNotMatch: boolean;
  maxQueryConnectionsLimit: number;
  connectionMode: number;
}
export interface LogicDatabasUpdateModel {
  id: string;
  databaseName: string;
  autoUseWriteConnectionStringAfterWriteDb: boolean;
  throwIfQueryRouteNotMatch: boolean;
  maxQueryConnectionsLimit: number;
  connectionMode: number;
  createTime:string;
  updateTime:string;
}
export interface LogicDatabasesModel {
  id: string;
  databaseName: string;
  autoUseWriteConnectionStringAfterWriteDb: boolean;
  throwIfQueryRouteNotMatch: boolean;
  maxQueryConnectionsLimit: number;
  connectionMode: number;
}

export type LogicDatabasePageResultModel = BasicFetchResult<LogicDatabasePageModel>;

export type ActualDatabaseQueryParams = {
  databaseName: string;
  logicDatabaseId:string;
};

export type ActualDatabaseQueryPageParams = BasicPageParams & ActualDatabaseQueryParams;

export interface ActualDatabasePageModel {
  id: string;
  logicDatabaseId: string;
  dataSourceName:string;
  connectionString: string;
  isDefault: boolean;
  createTime:string;
  updateTime:string;
}
export type ActualDatabasePageResultModel = BasicFetchResult<ActualDatabasePageModel>;


export interface ActualDatabasCreateModel {
  logicDatabaseName: string;
  dataSourceName:string;
  connectionString: string;
  isDefault: boolean;
}
export interface ActualDatabasUpdateModel {
  id: string;
  logicDatabaseName: string;
  dataSourceName:string;
  connectionString: string;
  isDefault: boolean;
}
export type LogicTableQueryParams = {
  databaseName: string;
  tableName: string;
};

export type LogicTableQueryPageParams = BasicPageParams & LogicTableQueryParams;


// public string Id { get; set; } = null!;
// public DateTime CreateTime { get; set; }
// public DateTime UpdateTime { get; set; }
// /// <summary>
// /// 逻辑表名称
// /// </summary>
// public string TableName { get; set; } = null!;
// public string LogicDatabaseName { get; set; } = null!;
// /// <summary>
// /// 分库规则
// /// </summary>
// public string? DataSourceRule { get; set; }
// public string? DataSourceRuleParam { get; set; }
// /// <summary>
// /// 分表规则
// /// </summary>
// public string? TableRule { get; set; }
// public string? TableRuleParam { get; set; }
export interface LogicTablePageModel {
  id: string;
  createTime:string;
  updateTime:string;
  logicDatabaseName: string;
  tableName:string;
  dataSourceRule: string;
  dataSourceRuleParam: string;
  tableRule: string;
  tableRuleParam: string;
}
export type LogicTablePageResultModel = BasicFetchResult<LogicTablePageModel>;

export interface LogicTableCreateModel {
  logicDatabaseName: string;
  tableName:string;
  dataSourceRule: string;
  dataSourceRuleParam: string;
  tableRule: string;
  tableRuleParam: string;
}

export interface LogicTableUpdateModel {
  id: string;
  dataSourceRule: string;
  dataSourceRuleParam: string;
  tableRule: string;
  tableRuleParam: string;
}

export type LogicTableActualTableQueryParams = {
  logicDatabaseName: string;
  logicTableName: string;
};

export type LogicTableActualTableQueryPageParams = BasicPageParams & LogicTableActualTableQueryParams;

export interface LogicTableActualTablePageModel {
  id: string;
  createTime:string;
  updateTime:string;
  tableName:string;
  logicDatabaseName: string;
  logicTableName: string;
  dataSource: string;
}
export type LogicTableActualTablePageResultModel = BasicFetchResult<LogicTableActualTablePageModel>;


export interface ActualTableCreateModel {
  tableName:string;
  logicDatabaseId: string;
  logicTableId: string;
  dataSourceId: string;
}


export type ActualDataSourceAllParams = {
  logicDatabaseId: string;
};

export interface ActualDataSourceListModel {
  id: string;
  dataSourceName: string;
}
