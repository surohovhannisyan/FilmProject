import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Carousel, Typography, Image } from 'antd';

import { RootState } from '../../Reducers';
import { getFilmDataTopRated, getFilmDataUpcoming } from '../Redux/Action';
import { UpcomingMovies } from './UpcomingMovies';
import { TopRatedMovies } from './TopRatedMovies';

import 'antd/dist/antd.css';
import styles from './Home.module.scss';

function Home() {
  return (
    <Col className={styles.topRated}>
      <TopRatedMovies />
      <UpcomingMovies />
    </Col>
  );
}

export default Home;
