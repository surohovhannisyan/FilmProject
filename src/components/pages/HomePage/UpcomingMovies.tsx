import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Carousel, Typography, Image } from 'antd';

import { RootState } from '../../../Reducers';
import { getFilmDataTopRated } from '../../../store/redux/action';
import { imageURL } from './home.constants';

import styles from './UpcomingMovies.module.scss';

const { Title } = Typography;

const UpcomingMovies = () => {
  const { data } = useSelector((state: RootState) => state.upcomingFilms);
  const dispatch = useDispatch();

  const getFilmInfo = () => {
    dispatch(getFilmDataTopRated());
  };

  const upcomingElements = data?.map((item, id) => {
    return (
      <Col className={styles.pattern} key={id}>
        <Image src={imageURL(item.poster_path)} className={styles.newimg} />
      </Col>
    );
  });

  useEffect(() => {
    getFilmInfo();
  }, []);

  return (
    <Col className={styles['upcoming-wrapper']}>
      <Col className={styles.titlewrapper}>
        <Title level={3} className={styles.movietitle}>
          Upcoming Movies
        </Title>
      </Col>
      <Carousel autoplay dots={false} className={styles['carousel-upcoming']}>
        <Row>
          <Col className={styles.wrapper}>
            <Col className={styles['wrapper-pattern']}>
              {upcomingElements && upcomingElements.slice(0, 10)}
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className={styles.wrapper}>
            <Col className={styles['wrapper-pattern']}>
              {upcomingElements && upcomingElements.slice(10, 20)}
            </Col>
          </Col>
        </Row>
      </Carousel>
    </Col>
  );
};

export default UpcomingMovies;
