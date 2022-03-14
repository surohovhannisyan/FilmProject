import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Carousel, Typography, Image } from 'antd';

import { RootState } from '../../Reducers';
import { getFilmDataUpcoming } from '../Redux/Action';

import styles from './UpcomingMovies.module.scss';

const { Title, Text } = Typography;
export const UpcomingMovies = () => {
  const { data } = useSelector((state: RootState) => state.upcomingFilms);
  const dispatch = useDispatch();

  const getFilmInfoUpcoming = () => {
    dispatch(getFilmDataUpcoming());
  };

  useEffect(() => {
    getFilmInfoUpcoming();
  }, []);

  return (
    <Col>
      <Col>
        <Title className={styles.titleOne} level={3}>
          Upcoming
        </Title>
      </Col>
      <Carousel effect="fade" autoplay className={styles.carouselTopRated}>
        {data?.map((item) => (
          <Row className={styles['row-top-rated']} key={item.id}>
            <Col className={styles['col-top-rated-in']}>
              <Col className={styles.pattern}>
                <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
              </Col>
              <Col className={styles.main}>
                <Title level={4}>Title: {item.original_title}</Title> <hr />
                <Title level={5}>Release Date: {item.release_date}</Title>
                <Title level={5}>Original language: {item.original_language}</Title>
                <Title level={5}>Vote average: {item.vote_average}</Title> <hr />
                <Text>
                  <Text strong>Overview:</Text> {item.overview}
                </Text>
              </Col>
            </Col>
          </Row>
        ))}
      </Carousel>
    </Col>
  );
};
