import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Table, Col, Input, Typography } from 'antd';

import { getFilmDataByGenre, getFilmDataByQuery } from '../Redux/Action';
import { RootState } from '../../Reducers';
import { columns } from './filmsTable.config';
import { genres } from './filmsGenres.constants';

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

const { Title } = Typography;

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

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Col className={styles.filmsRoot}>
      <Col className={styles.searchSect}>
        <Title level={5} className={styles.labelSelect}>
          Select Genre
        </Title>
        <Select onChange={selectChangeHandler} placeholder="Genres" className={styles.selectGenre}>
          {genres.map((item) => (
            <Option key={item.key} value={item.key}>
              {item.genre_name}
            </Option>
          ))}
        </Select>
      </Col>
      <Col className={styles.inputSect}>
        <Title level={5} className={styles.labelSearch}>
          Search By Title
        </Title>
        <Input type="text" value={title} onChange={changeInputHandler} placeholder="Type title" />
      </Col>
      <Col className="filmTable">
        <Table
          columns={columns}
          dataSource={data}
          className={styles.tableMain}
          pagination={false}
        />
      </Col>
    </Col>
  );
};

export default Films;
