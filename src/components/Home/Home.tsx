import React from 'react';
import { Col } from 'antd';

import UpcomingMovies from './UpcomingMovies';
import TopRatedMovies from './TopRatedMovies';

import 'antd/dist/antd.css';
import styles from './Home.module.scss';

function Home() {
  return (
    <Col className={styles['top-rated']}>
      <TopRatedMovies />
      <UpcomingMovies />
    </Col>
  );
}

export default Home;
