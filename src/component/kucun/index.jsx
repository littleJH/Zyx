import { Table } from 'antd';
import { kucunData } from '../../assets/data';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: "center"
  },
  {
    title: 'Product ID',
    dataIndex: 'name',
    key: 'name',
    align: "center"
  },
  {
    title: 'Stock Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    align: "center"
  },
];

const Kucun = () => {
  return (
    <div className="fruit-table-container">
      <Table columns={columns} dataSource={kucunData} pagination={false} bordered />
    </div>
  );
};

export default Kucun;