// 全站 mock 数据统一入口。按模块分文件维护后在此汇总导出。
export interface StatItem {
  key: string;
  title: string;
  value: number;
  unit: string;
}

export const sampleStats: StatItem[] = [
  { key: 'users', title: '用户总数', value: 1280, unit: '人' },
  { key: 'orders', title: '订单总数', value: 342, unit: '单' },
  { key: 'revenue', title: '营收', value: 56800, unit: '元' },
];
