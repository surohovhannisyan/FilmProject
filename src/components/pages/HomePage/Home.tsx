import React from 'react';
import { Col } from 'antd';

import UpcomingMovies from './UpcomingMovies';
import HomeMainSection from './HomeMainSection';
import TopRatedMovies from './TopRatedMovies';

import 'antd/dist/antd.css';
import styles from './Home.module.scss';

function Home() {
  return (
    <Col className={styles['home-main']}>
      <HomeMainSection />
      <TopRatedMovies />
      <UpcomingMovies />
    </Col>
  );
}

export default Home;
