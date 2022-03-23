import React from 'react';
import { Space, Spin } from 'antd';

import styles from './Loading.module.scss';
const Loading = () => {
  return (
    <Space className={styles['loading-space']}>
      <Spin size="large" className={styles['loading-spin']} />
    </Space>
  );
};

export default Loading;
