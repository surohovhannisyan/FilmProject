import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Table, Col, Input, Typography, Drawer } from 'antd';

import { getFilmDataByGenre, getFilmDataByQuery } from '../Redux/Action';
import { RootState } from '../../Reducers';
import { movieDataTableConfig } from './filmsTable.config';
import { genres } from './films.constants';

import styles from './Films.module.scss';
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

interface IDrawerState {
  title: string;
  releaseDate: string;
  voteAverage: number | null;
  language: string;
  backdropPath: string;
}

const { Title } = Typography;

export const Films = () => {
  const { data } = useSelector((state: RootState) => state.film);
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<number>(16);
  const [isVisible, setIsVisible] = useState(false);
  const [drawerState, setDrawerState] = useState<IDrawerState>({
    title: '',
    releaseDate: '',
    voteAverage: 0,
    language: '',
    backdropPath: '',
  });

  const { Option } = Select;
  const dispatch = useDispatch();

  const getFilmInfo = () => {
    dispatch(getFilmDataByGenre(genre));
  };

  const getFilmBySearch = () => {
    dispatch(getFilmDataByQuery(title));
  };

  useEffect(() => {
    getFilmInfo();
  }, [genre]);

  useEffect(() => {
    getFilmBySearch();
  }, [title]);

  const selectChangeHandler = (value: number) => {
    setGenre(value);
    setTitle('');
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const openDrawer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVisible(true);
    data?.map((item) => {
      if (item.poster_path === e.target.id) {
        setDrawerState({
          title: item.original_title,
          releaseDate: item.release_date,
          voteAverage: item.vote_average,
          language: item.original_language,
          backdropPath: item.backdrop_path,
        });
      }
    });
  };

  const closeDrawer = () => {
    setIsVisible(false);
  };

  return (
    <Col className={styles['films-root']}>
      <Col className={styles['search-sect']}>
        <Select
          onChange={selectChangeHandler}
          placeholder="Genres"
          className={styles['select-genre']}
        >
          {genres.map((item) => (
            <Option key={item.key} value={item.key}>
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
      <Drawer
        title="About"
        placement="left"
        closable={false}
        onClose={closeDrawer}
        visible={isVisible}
        size={'large'}
      >
        <Col>
          <h3>Title: {drawerState.title}</h3>
          <p>Release Date: {drawerState.releaseDate}</p>
          <p>Vote Average: {drawerState.voteAverage}</p>
          <p>Original Language: {drawerState.language}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${drawerState.backdropPath}`} />
        </Col>
      </Drawer>
      <Col className={styles['film-table']}>
        <Table
          columns={movieDataTableConfig(openDrawer)}
          dataSource={data}
          className={styles['table-main']}
          pagination={false}
        />
      </Col>
    </Col>
  );
};

export default Films;
