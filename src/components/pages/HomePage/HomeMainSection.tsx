import React from 'react';
import { Carousel, Typography, Col } from 'antd';

import styles from './HomeMainSection.module.scss';

const { Title } = Typography;

const HomeMainSection = () => {
  return (
    <Col className={styles.root}>
      <Col className={styles.title}>
        <Title level={4}>Watch Providers</Title>
      </Col>
      <Carousel effect="fade" dotPosition="bottom" autoplay className={styles['carousel-marvel']}>
        <Col className={styles.section}>
          <Col className={styles.imgwrapper}>
            <img src="*" alt="" />
          </Col>
        </Col>
      </Carousel>
    </Col>
  );
};

export default HomeMainSection;
