import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Carousel, Typography, Image } from 'antd';

import { RootState } from '../../Reducers';
import { getFilmDataTopRated } from '../Redux/Action';

import styles from './TopRatedMovies.module.scss';

const { Title, Text } = Typography;

export const TopRatedMovies = () => {
  const { data } = useSelector((state: RootState) => state.film);
  const dispatch = useDispatch();

  const getFilmInfo = () => {
    dispatch(getFilmDataTopRated());
  };

  useEffect(() => {
    getFilmInfo();
  }, []);
  return (
    <Col>
      <Col>
        <Title level={3} className={styles.titleTwo}>
          Top Rated
        </Title>
      </Col>
      <Carousel dotPosition="top" autoplay className={styles.carouselUpcoming}>
        {data?.map((item) => (
          <Row className={styles.rowUpcoming} key={item.id}>
            <Col className={styles.colUpcomingIn}>
              <Col className={styles.upcomingMain}>
                <Title level={4}>Title: {item.original_title}</Title> <hr />
                <Title level={5}>Release Date: {item.release_date}</Title>
                <Title level={5}>Original language: {item.original_language}</Title>
                <Title level={5}>Vote average: {item.vote_average}</Title> <hr />
                <Text>
                  <Text strong>Overview:</Text> {item.overview}
                </Text>
              </Col>
              <Col className={styles.upcomingPattern}>
                <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
              </Col>
            </Col>
          </Row>
        ))}
      </Carousel>
    </Col>
  );
};
