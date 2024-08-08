import { useState } from 'react';
import { Modal, Button, Input, Select, Form, Result } from 'antd';

const { Option } = Select;

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState('');
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        setSelectedSystem(values.system);
        setVisible(false);
        setSuccessVisible(true);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleSuccessOk = () => {
    setSuccessVisible(false);
  };

  return (
    <div style={{
      position: 'absolute',
      top: '2rem',
      right: '4rem'
    }}>
      <Button type="primary" className='button' onClick={showModal} >
        Open Login Form
      </Button>
      <Modal
        open={visible}
        title="Login"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} style={{ backgroundColor: '#ff4d4f', color: '#fff', borderColor: '#ff4d4f' }}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}>
            Login
          </Button>,
          <Button key="register" type="default" style={{ backgroundColor: '#1890ff', color: '#fff', borderColor: '#1890ff' }}>
            Register
          </Button>,
        ]}
        styles={{
          body: { backgroundColor: '#f0f2f5', borderRadius: '8px' }
        }}
        style={{ borderRadius: '8px' }}
      >
        <Form form={form} layout="vertical" name="login_form">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Enter your username" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" style={{ borderRadius: '4px' }} />
          </Form.Item>
          <Form.Item
            name="system"
            label="Select System"
            rules={[{ required: true, message: 'Please select a system!' }]}
          >
            <Select placeholder="Select a system" style={{ borderRadius: '4px' }}>
              <Option value="Self-Checkout System">Self-Checkout System</Option>
              <Option value="Management System">Management System</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={successVisible}
        title="Success"
        onOk={handleSuccessOk}
        onCancel={handleSuccessOk}
        footer={[
          <Button key="ok" type="primary" onClick={handleSuccessOk}>
            OK
          </Button>,
        ]}
      >
        <Result
          status="success"
          title="Successfully Logged In!"
          subTitle={`Welcome, admin! You have selected the ${selectedSystem}.`}
        />
      </Modal>
    </div>
  );
};

export default LoginForm;
