import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Carousel, Typography, Image } from 'antd';

import { RootState } from '../../Reducers';
import { getFilmDataUpcoming } from '../Redux/Action';

import styles from './TopRatedMovies.module.scss';

const { Title, Text } = Typography;

export const TopRatedMovies = () => {
  const { data } = useSelector((state: RootState) => state.film);
  const dispatch = useDispatch();

  const imageURL = (path: string) => {
    return `https://image.tmdb.org/t/p/w500/${path}`;
  };

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
          Top Rated
        </Title>
      </Col>
      <Carousel effect="fade" autoplay className={styles.carouselTopRated}>
        {data?.map((item) => (
          <Row className={styles['row-top-rated']} key={item.id}>
            <Col className={styles['col-top-rated-in']}>
              <Col className={styles.pattern}>
                <Image src={imageURL(item.poster_path)} />
              </Col>
              <Col className={styles.main}>
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
            </Col>
          </Row>
        ))}
      </Carousel>
    </Col>
  );
};
