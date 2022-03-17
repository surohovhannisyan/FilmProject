import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Table, Col, Input, Modal } from 'antd';

import { getFilmDataByGenre, getFilmDataByQuery } from '../Redux/Action';
import { RootState } from '../../Reducers';
import { movieDataTableConfig } from './filmsTable.config';
import { genres } from './films.constants';

import styles from './Films.module.scss';
// import 'antd/dist/antd.css';

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

export const Films = () => {
  const { data } = useSelector((state: RootState) => state.film);
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<number>(16);

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
      <Col className={styles['film-table']}>
        <Table
          columns={movieDataTableConfig()}
          dataSource={data}
          className={styles['table-main']}
          pagination={false}
          rowKey={'id'}
        />
      </Col>
    </Col>
  );
};

export default Films;
