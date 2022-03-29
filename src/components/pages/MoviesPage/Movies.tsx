import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Table, Col, Input, Modal, Carousel, Typography } from 'antd';

import {
  getFilmDataByGenre,
  getFilmDataByQuery,
  getMovieVideoData,
} from '../../../store/redux/action';
import { RootState } from '../../../Reducers';
import { movieDataTableConfig } from './moviesTable.config';
import { genres, GenreId } from './movies.constants';

import styles from './Movies.module.scss';
import 'antd/dist/antd.css';

export interface IMovieDataItems {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IVideoItem {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string | null;
  name: string;
  official: true;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

const { Title } = Typography;

export const Movies = () => {
  const { data } = useSelector((state: RootState) => state.film);
  const movieVideoData = useSelector((state: RootState) => state.videos);

  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<number>(GenreId.Animation);
  const [currentId, setCurrentId] = useState<string | null>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { Option } = Select;

  const dispatch = useDispatch();
  const getFilmInfo = () => {
    dispatch(getFilmDataByGenre(genre));
  };

  const getFilmBySearch = () => {
    dispatch(getFilmDataByQuery(title));
  };

  const getMovieVideo = () => {
    dispatch(getMovieVideoData(currentId));
  };

  const selectChangeHandler = (value: number) => {
    setGenre(value);
    setTitle('');
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onCancel = () => {
    setIsVisible(false);
  };

  const openModal = async (e: React.MouseEvent<HTMLImageElement>) => {
    setCurrentId(e.currentTarget.id);
    setIsVisible(true);
  };

  const changeGenre = (e: React.MouseEvent<HTMLSpanElement>) => {
    setGenre(+e.currentTarget.id);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getMovieVideo();
  }, [currentId]);

  useEffect(() => {
    getFilmInfo();
  }, [genre]);

  useEffect(() => {
    getFilmBySearch();
  }, [title]);

  return (
    <Col className={styles['films-root']}>
      <Col className={styles['search-sect']}>
        <Select
          onChange={selectChangeHandler}
          placeholder="Genres"
          className={styles['select-genre']}
        >
          {genres.map((item) => (
            <Option key={item.key} value={item.key} className={styles['selct-option']}>
              {item.genre_name}
            </Option>
          ))}
        </Select>
        <Input
          type="text"
          value={title}
          onChange={inputChangeHandler}
          placeholder="Search by title"
        />
      </Col>
      <Modal
        visible={isVisible}
        closable={false}
        onCancel={onCancel}
        footer={null}
        maskStyle={{ background: 'black', opacity: 0.7 }}
        destroyOnClose={true}
        width={'45%'}
        className={styles.modal}
      >
        <Carousel className={styles['modal-main']} dotPosition="bottom">
          {movieVideoData.data?.map((item: IVideoItem) => (
            <Col key={item.id} className={styles['modal-sect']}>
              <Col className={styles.titlemodal}>
                <Title level={3}>{item.name}</Title>
              </Col>
              <Col>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${item.key}`}
                  controls={true}
                  playing={false}
                  volume={1}
                  width={'100%'}
                  className={styles.player}
                />
              </Col>
            </Col>
          ))}
        </Carousel>
      </Modal>
      <Col className={styles['film-table']}>
        <Table
          columns={movieDataTableConfig(openModal, changeGenre)}
          dataSource={data}
          className={styles['table-main']}
          pagination={false}
          rowKey={'id'}
        />
      </Col>
    </Col>
  );
};

export default Movies;
