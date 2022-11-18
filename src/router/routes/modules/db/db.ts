import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const db: AppRouteModule = {
  path: '/db',
  name: 'Db',
  component: LAYOUT,
  redirect: '/db/database',
  meta: {
    orderNo: 2100,
    icon: 'ion:settings-outline',
    title: '数据库管理',
  },
  children: [
    {
      path: 'database',
      name: 'DatabaseManagement',
      meta: {
        title: '逻辑数据库管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/db/database/index.vue'),
    }
  ],
};

export default db;
