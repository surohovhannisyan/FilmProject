import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getFilmDataByGenre, getFilmDataByQuery } from '../Redux/Action';
import { RootState } from '../../Reducers';
import { Select, Table, Col, Input, Typography } from 'antd';
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

interface ISign {
  title: string;
  genre: number;
}

const { Text } = Typography;

const Films = () => {
  const data = useSelector((state: RootState) => state.film).data;
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

  const dataArr: Object[] = [];

  data?.map((item) => {
    dataArr.push(item);
  });

  const selectChangeHandler = (value: number) => {
    setGenre(value);
    setTitle('');
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Col className="films-root">
      <Col className="search-sect">
        <h4 className="labelSelect">Select Genre</h4>
        <Select onChange={selectChangeHandler} placeholder="Genres" className="selectGenre">
          {genres.map((item) => (
            <Option key={item.key} value={item.key}>
              {item.genre_name}
            </Option>
          ))}
        </Select>
      </Col>
      <Col className="input-sect">
        <h4 className="labelSearch">Search By Title </h4>
        <Input type="text" value={title} onChange={changeInputHandler} placeholder="Type title" />
      </Col>
      <Col className="filmTable">
        <Table columns={columns} dataSource={dataArr} className="tableMain" pagination={false} />
      </Col>
    </Col>
  );
};

export default Films;
