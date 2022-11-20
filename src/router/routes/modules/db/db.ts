import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const db: AppRouteModule = {
  path: '/db',
  name: 'Db',
  component: LAYOUT,
  redirect: '/db/logic-database',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: '数据库管理',
  },
  children: [
    {
      path: 'logic-database',
      name: 'LogicDatabaseManagement',
      meta: {
        title: '逻辑数据库管理',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/db/logic-database/index.vue'),
    },
    {
      path: 'actual-database',
      name: 'ActualDatabaseManagement',
      meta: {
        title: '实际数据库管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/db/actual-database/index.vue'),
    },
    {
      path: 'logic-table',
      name: 'LogicTableManagement',
      meta: {
        title: '逻辑表管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/db/logic-table/index.vue'),
    }
  ],
};

export default db;
