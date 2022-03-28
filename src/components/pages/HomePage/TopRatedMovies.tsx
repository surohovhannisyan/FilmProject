import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Col, Carousel, Row, Image } from 'antd';
import _ from 'lodash';

import { RootState } from '../../../Reducers';
import { getFilmDataUpcoming } from '../../../store/redux/action';
import { imageURL } from './home.constants';

import styles from './TopRatedMovies.module.scss';

const { Title } = Typography;

const TopRatedMovies = () => {
  const { data } = useSelector((state: RootState) => state.film);
  const dispatch = useDispatch();

  const getFilmInfoUpcoming = () => {
    dispatch(getFilmDataUpcoming());
  };

  const topRatedElements = data?.map((item, id) => {
    return (
      <Col className={styles.pattern} key={id}>
        <Image src={imageURL(item.poster_path)} className={styles.newimg} />
      </Col>
    );
  });

  useEffect(() => {
    getFilmInfoUpcoming();
  }, []);

  return (
    <Col className={styles['top-rated-wrapper']}>
      <Col className={styles.titlewrapper}>
        <Title level={3} className={styles.movietitle}>
          Top Rated
        </Title>
      </Col>
      <Carousel autoplay dots={false} autoplaySpeed={5000} className={styles['carousel-top-rated']}>
        <Row>
          <Col className={styles.wrapper}>
            <Col className={styles['wrapper-pattern']}>
              {topRatedElements && topRatedElements.slice(0, 10)}
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className={styles.wrapper}>
            <Col className={styles['wrapper-pattern']}>
              {topRatedElements && topRatedElements.slice(10, 20)}
            </Col>
          </Col>
        </Row>
      </Carousel>
    </Col>
  );
};

export default TopRatedMovies;
