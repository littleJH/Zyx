import { useState } from 'react';
import { Button, Card, Layout, Menu, Space } from 'antd';
import { CloseOutlined, DeleteColumnOutlined, PlusCircleOutlined, PlusSquareOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import Xiaoshou from '../component/xiaoshou/index'
import Kucun from '../component/kucun/index';
import LoginForm from '../component/login';
import { InsertRowAboveOutlined } from '@ant-design/icons';
import FruitTable from '../component/info/index';
import closeIcon from '../assets/icon/close.png'

const contentList = {
  productInfo: <FruitTable></FruitTable>,
  salesManagement: <Xiaoshou></Xiaoshou>,
  inventoryManagement: <Kucun></Kucun>
};

const AnalysisSystem = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('productInfo');
  const onTab1Change = ({ key }) => {
    setActiveTabKey1(key);
  };

  return (
    <div className='container'>
      <LoginForm></LoginForm>
      <Card
        bordered
        className='cardBox'
        title={<div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          Fruit Sales Management System
        </div>}
        extra={<img src={closeIcon} style={{
          width: '20px',
          height: '20px',
          cursor: 'pointer',
          opacity: '0.5'
        }}></img>}
      >
        <Layout className='layout-container'>
          <Sider className='side-menu'>
            <Menu selectedKeys={activeTabKey1} onSelect={onTab1Change}>
              <Menu.Item key="productInfo">Product Information Management</Menu.Item>
              <Menu.Item key="salesManagement">Sales Management</Menu.Item>
              <Menu.Item key="inventoryManagement">Inventory Management</Menu.Item>
            </Menu>
          </Sider>
          <Content className='content'>
            <Space style={{
              width: '100%',
              justifyContent: 'flex-end'
            }} size={16} >
              <Button className='button' type='primary' icon={<PlusCircleOutlined />}>Add</Button>
              <Button className='button' type='primary' icon={<PlusSquareOutlined />}>Edit</Button>
              <Button className='button' type='primary' icon={<InsertRowAboveOutlined />}>Bulk Import</Button>
              <Button className='button' type='primary' icon={<DeleteColumnOutlined />}>Delete</Button>
            </Space>
            {contentList[activeTabKey1]}
          </Content>
        </Layout>
      </Card>
    </div>
  );
};

export default AnalysisSystem;