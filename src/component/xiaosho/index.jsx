import { Table } from 'antd';
import { xiaoshouData } from '../../assets/data';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: "center"
  },
  {
    title: 'Product',
    dataIndex: 'name',
    key: 'name',
    align: "center"
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    align: "center"
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    align: "center"
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    align: "center"
  },
];

const Sales = () => {
  return (
    <div className="fruit-table-container">
      <Table columns={columns} dataSource={xiaoshouData} pagination={false} bordered />
    </div>
  );
};

export default Sales;