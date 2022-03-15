import React from 'react';
import { Space, Spin } from 'antd';

import styles from './Loading.module.scss';
const Loading = () => {
  return (
    <Space className={styles.loadingSpace}>
      <Spin size="large" className={styles.loadingSpin} />
    </Space>
  );
};

export default Loading;
