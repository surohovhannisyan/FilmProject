import React, { SetStateAction, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getFilmData } from '../Redux/Action';
import { RootState } from '../../Reducers';
import { Select, Table, Col } from 'antd';
import { columns } from '../Config/FilmsTable.config';
import { genres } from '../Config/FilmsGenres.config';

import './Films.scss';
import 'antd/dist/antd.css';

export interface IItems {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
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

const Films = () => {
  const data = useSelector((state: RootState) => state.film).data;
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(28);

  const { Option } = Select;

  const dispatch = useDispatch();

  const getFilmInfo = () => {
    dispatch(getFilmData(genre));
  };

  useEffect(() => {
    getFilmInfo();
  }, [genre]);

  const dataArr: Object[] = [];

  data?.map((item) => {
    dataArr.push(item);
  });

  const selectChangeHandler = (value: number) => {
    setGenre(value);
  };

  return (
    <Col className="films-root">
      <Col className="search-sect">
        <Select onChange={selectChangeHandler} className="selectGenre">
          {genres.map((item) => (
            <Option key={item.key} value={item.key}>
              {item.genre_name}
            </Option>
          ))}
        </Select>
      </Col>
      <Col className="filmTable">
        <Table columns={columns} dataSource={dataArr} />
      </Col>
    </Col>
  );
};

export default Films;
