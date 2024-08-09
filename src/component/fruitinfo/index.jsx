// FruitTable.js
import { Table } from 'antd';
import { infoData } from '../../assets/data';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: "center"
  },
  {
    title: 'Fruit Name',
    dataIndex: 'name',
    key: 'name',
    align: "center"
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    align: "center"
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    align: "center"
  },
];

const FruitTable = () => {
  return (
    <div className="fruit-table-container">
      <Table columns={columns} dataSource={infoData} pagination={false} bordered />
    </div>
  );
};

export default FruitTable;