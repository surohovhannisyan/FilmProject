import React, { Suspense } from 'react';
import { Col } from 'antd';

const UpcomingMovies = React.lazy(() => import('./UpcomingMovies'));
const TopRatedMovies = React.lazy(() => import('./TopRatedMovies'));

import 'antd/dist/antd.css';
import styles from './Home.module.scss';

function Home() {
  return (
    <Col className={styles.topRated}>
      <Suspense fallback={<>Loading...</>}>
        <TopRatedMovies />
        <UpcomingMovies />
      </Suspense>
    </Col>
  );
}

export default Home;
