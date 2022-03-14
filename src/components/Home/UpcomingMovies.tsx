import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Carousel, Typography, Image } from 'antd';

import { RootState } from '../../Reducers';
import { getFilmDataTopRated } from '../Redux/Action';

import styles from './UpcomingMovies.module.scss';

const { Title, Text } = Typography;

export const UpcomingMovies = () => {
  const { data } = useSelector((state: RootState) => state.upcomingFilms);
  const dispatch = useDispatch();

  const imageURL = (path: string) => {
    return `https://image.tmdb.org/t/p/w500/${path}`;
  };

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
          Upcoming
        </Title>
      </Col>
      <Carousel dotPosition="top" autoplay className={styles.carouselUpcoming}>
        {data?.map((item) => (
          <Row className={styles.rowUpcoming} key={item.id}>
            <Col className={styles.colUpcomingIn}>
              <Col className={styles.upcomingMain}>
                <Title level={4}>Title: {item.original_title}</Title>
                <hr />
                <Text>
                  Release Date: {item.release_date} <br />
                  Original language: {item.original_language} <br />
                  Vote average: {item.vote_average} <br />
                </Text>
                <hr />
                <Col>
                  <Text strong>Overview:</Text> {item.overview}
                </Col>
              </Col>
              <Col className={styles.upcomingPattern}>
                <Image src={imageURL(item.poster_path)} />
              </Col>
            </Col>
          </Row>
        ))}
      </Carousel>
    </Col>
  );
};
