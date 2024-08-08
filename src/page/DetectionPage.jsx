import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Upload, Layout, Modal, Input, Form, Table, Image, Space, Result, Select } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const { Content } = Layout;

const DetectionPage = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [summaryModalVisible, setSummaryModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImages((value) => [...value, reader.result]);
      setModalVisible(true)
    };
    reader.readAsDataURL(file);
    return false; // Prevent automatic upload
  };

  const handleFormSubmit = (values) => {
    console.log("🚀 ~ handleFormSubmit ~ values:", values)
    // Simulate freshness detection and calculation
    const decayLevels = ['Fresh', 'Moderately Fresh', 'Not Fresh'];
    const discounts = [1.0, 0.8, 0.5];
    const discount = values.deduction;
    const finalUnitPrice = values.originalPrice * discount;
    const finalPrice = finalUnitPrice * values.weight;

    const newItem = {
      name: values.produceName,
      freshness: decayLevels[discounts.findIndex(val => val === discount)],
      originalPrice: values.originalPrice,
      discount: discount * 100,
      finalUnitPrice: finalUnitPrice.toFixed(2),
      weight: values.weight,
      finalPrice: finalPrice.toFixed(2),
    };

    setSelectedItems([...selectedItems, newItem]);
    setModalVisible(false);
    form.resetFields();
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + parseFloat(item.finalPrice), 0).toFixed(2);
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Freshness', dataIndex: 'freshness', key: 'freshness' },
    { title: 'Original Price', dataIndex: 'originalPrice', key: 'originalPrice' },
    { title: 'Discount (%)', dataIndex: 'discount', key: 'discount' },
    { title: 'Final Unit Price', dataIndex: 'finalUnitPrice', key: 'finalUnitPrice' },
    { title: 'Weight', dataIndex: 'weight', key: 'weight' },
    { title: 'Final Price', dataIndex: 'finalPrice', key: 'finalPrice' },
  ];

  return (
    <Layout className="detection-page">
      <Content className="detection-content">
        <Space style={{
          width: '100%',
          display: "flex",
          justifyContent: "center"
        }}>
          <Button
            type="primary"
            size="large"
            className="detection-button"
            onClick={() => navigate('/')}
          >
            Back to Main
          </Button>
          <Upload
            accept="image/*"
            beforeUpload={handleFileUpload}
            showUploadList={false}
          >
            <Button
              type="primary"
              size="large"
              className="detection-button"
              icon={<CameraOutlined />}
            >
              Start Detection
            </Button>
          </Upload>
        </Space>
        {previewImages && (
          <div className="image-preview-container">
            {previewImages.map((image, index) => (
              <Image key={index} src={image} alt={`Preview ${index}`} style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} />
            ))}
          </div>
        )}
        <Table
          dataSource={selectedItems}
          columns={columns}
          rowKey="name"
          className="detection-table"
        />
        <Space style={{
          width: '100%',
          justifyContent: 'flex-end',
          marginTop: '1rem'
        }} size={16} >
          <Upload
            accept="image/*"
            beforeUpload={handleFileUpload}
            showUploadList={false}
          >
            <Button className='button' type='primary'>Continue Detection</Button>
          </Upload>
          <Button className='button' type='primary' >Member Login</Button>
          <Button className='button' type='primary' >Cancel Order</Button>
          <Button className='button' type='primary' onClick={() => setSummaryModalVisible(true)}>Confirm Payment</Button>
          <Button className='button' type='primary' >Close Window</Button>
        </Space>
      </Content>
      <Modal
        visible={modalVisible}
        title="Freshness Detection"
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="produceName"
            label="Produce Name"
            rules={[{ required: true, message: 'Please enter the produce name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="originalPrice"
            label="Original Price"
            rules={[{ required: true, message: 'Please enter the original price' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="weight"
            label="Weight (kg)"
            rules={[{ required: true, message: 'Please enter the weight' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="deduction" label="Deduction" rules={[{ required: true, message: 'Please enter the deduction' }]}>

            <Select>
              <Select.Option value={0.5}>Not Fresh</Select.Option>
              <Select.Option value={0.8}>Moderately Fresh</Select.Option>
              <Select.Option value={1}>Fresh</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Confirm
              </Button>
              <Button onClick={() => setModalVisible(false)}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={summaryModalVisible}
        title="Total Price Summary"
        onCancel={() => setSummaryModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setSummaryModalVisible(false)}>
            Close
          </Button>,
          <Button key={'zhifu'} type="primary" >Pay</Button>
        ]}
      >
        <Result
          status="info"
          title={`The total price of all items is $${calculateTotalPrice()}`}
        />
      </Modal>
    </Layout >
  );
};

export default DetectionPage;