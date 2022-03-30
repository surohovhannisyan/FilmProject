import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Typography, Col, Tag, Button, Image } from 'antd';

import { RootState } from '../../../Reducers';
import { getMoviesPopular } from '../../../store/redux/action';
import { genres, languages } from '../MoviesPage/movies.constants';
import { imageURL } from './home.constants';

import styles from './HomeMainSection.module.scss';

const { Title, Text } = Typography;

const HomeMainSection = () => {
  const { data } = useSelector((state: RootState) => state.popular);
  const dispatch = useDispatch();

  const getMostPopular = () => {
    dispatch(getMoviesPopular());
  };

  const originalLanguage = (lang: string) => {
    for (let i = 0; i < languages.length; i++) {
      if (lang === languages[i].key) {
        return languages[i].language;
      }
    }
  };

  useEffect(() => {
    getMostPopular();
  }, []);

  return (
    <Col className={styles.root}>
      <Carousel autoplay effect="fade" autoplaySpeed={5000} className={styles['carousel-header']}>
        {data?.map((item) => (
          <Col key={item.id} className={styles['carousel-section']}>
            <Col className={styles['section-wrapper']}>
              <Col
                className={styles['section-background']}
                style={{
                  background: `url(${imageURL}${item.backdrop_path})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></Col>
              <Col className={styles['section-main']}>
                <Col className={styles['img-sect']}>
                  <Image src={`${imageURL}${item.poster_path}`} width={'100%'} />
                </Col>
                <Col className={styles['about-sect']}>
                  <Col className={styles.title}>
                    <Title level={2}> {item.name}</Title>
                  </Col>
                  <Col className={styles.overview}>
                    <Text>
                      <b>Overview:</b> {item.overview} <br />
                      <b>Original language:</b> {originalLanguage(item.original_language)} <br />
                      <b>Vote average:</b> {item.vote_average} <br />
                      <b>First air date:</b> {item.first_air_date}
                    </Text>
                  </Col>
                  <Col className={styles.genres}>
                    <Title level={5}>Genres</Title>
                    {item.genre_ids.map((genre) => {
                      for (let i = 0; i < genres.length; i++) {
                        if (genre === genres[i].key) {
                          return (
                            <Tag key={genre} color={'grey'}>
                              {genres[i].genre_name}
                            </Tag>
                          );
                        }
                      }
                    })}
                  </Col>
                  <Col className={styles.buttons}>
                    <Button>Watch later</Button>
                  </Col>
                </Col>
              </Col>
            </Col>
          </Col>
        ))}
      </Carousel>
    </Col>
  );
};

export default HomeMainSection;
