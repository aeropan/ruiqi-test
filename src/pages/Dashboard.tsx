import { Card, Table, Typography } from 'antd';
import { sampleStats } from '@/data';

const columns = [
  { title: '指标', dataIndex: 'title', key: 'title' },
  { title: '数值', dataIndex: 'value', key: 'value' },
  { title: '单位', dataIndex: 'unit', key: 'unit' },
];

export default function Dashboard() {
  return (
    <div>
      <Typography.Title level={3}>仪表盘</Typography.Title>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
        {sampleStats.map((s) => (
          <Card key={s.key} style={{ width: 200 }}>
            <div style={{ color: '#888' }}>{s.title}</div>
            <div style={{ fontSize: 24, fontWeight: 600 }}>
              {s.value} {s.unit}
            </div>
          </Card>
        ))}
      </div>
      <Card title="示例表格">
        <Table rowKey="key" columns={columns} dataSource={sampleStats} pagination={false} />
      </Card>
    </div>
  );
}
