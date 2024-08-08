import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout } from 'antd';

const { Content } = Layout;

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Layout className="main-page">
      <Content className="main-content">
        <div className="button-container">
          <Button
            type="primary"
            size="large"
            className="main-button"
            onClick={() => navigate('/detection')}
          >
            Enter Detection System
          </Button>
          <Button
            type="primary"
            size="large"
            className="main-button"
            onClick={() => window.close()}
          >
            Exit System
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default MainPage;