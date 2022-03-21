import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Col, Carousel, Row, Image } from 'antd';

import { RootState } from '../../Reducers';
import { getFilmDataUpcoming } from '../Redux/Action';

import styles from './TopRatedMovies.module.scss';

const { Title } = Typography;

const TopRatedMovies = () => {
  const { data } = useSelector((state: RootState) => state.film);
  const dispatch = useDispatch();

  const imageURL = (path: string) => {
    return `https://image.tmdb.org/t/p/w500/${path}`;
  };

  const getFilmInfoUpcoming = () => {
    dispatch(getFilmDataUpcoming());
  };

  const datanew = data?.map((item, id) => {
    return (
      <Col className={styles.pattern} key={id}>
        <Image src={imageURL(item.poster_path)} className={styles.newimg} />
        <Col className={styles.titlewrapper}>
          <Title level={5} className={styles.movietitle}>
            {item.original_title}
          </Title>
        </Col>
      </Col>
    );
  });

  useEffect(() => {
    getFilmInfoUpcoming();
  }, []);

  return (
    <Col className={styles['top-rated-wrapper']}>
      <Carousel autoplay className={styles['carousel-top-rated']}>
        <Row>
          <Col className={styles.wrapper}>
            <Col className={styles['wrapper-pattern']}>
              {datanew && datanew[0]}
              {datanew && datanew[1]}
              {datanew && datanew[2]}
              {datanew && datanew[3]}
              {datanew && datanew[4]}
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className={styles.wrapper}>
            <Col className={styles['wrapper-pattern']}>
              {datanew && datanew[5]}
              {datanew && datanew[6]}
              {datanew && datanew[7]}
              {datanew && datanew[8]}
              {datanew && datanew[9]}
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className={styles.wrapper}>
            <Col className={styles['wrapper-pattern']}>
              {datanew && datanew[10]}
              {datanew && datanew[11]}
              {datanew && datanew[12]}
              {datanew && datanew[13]}
              {datanew && datanew[14]}
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className={styles.wrapper}>
            <Col className={styles['wrapper-pattern']}>
              {datanew && datanew[15]}
              {datanew && datanew[16]}
              {datanew && datanew[17]}
              {datanew && datanew[18]}
              {datanew && datanew[19]}
            </Col>
          </Col>
        </Row>
      </Carousel>
    </Col>
  );
};

export default TopRatedMovies;
