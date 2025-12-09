import React from 'react';
import { ConfigProvider, theme } from 'antd';
import Home from './pages/Home';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#1976D2', // Primary
          colorSuccess: '#388E3C', // Success
          colorWarning: '#F57C00', // Warning
          colorError: '#D32F2F',   // Error
          fontFamily: "'Inter', sans-serif",
          colorBgContainer: '#121212',
        },
      }}
    >
      <Home />
    </ConfigProvider>
  );
}

export default App;
