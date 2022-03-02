import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmData } from '../Redux/Action';
import { RootState } from '../../Reducers';
import { Input, Button, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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
  const data = useSelector((state: RootState) => state.film);
  const { Option } = Select;
  const [title, setTitle] = useState('');
  const [page, setPage] = useState<number>(1);

  const handleChange = (value: number) => {
    setPage(value);
  };

  const dispatch = useDispatch();
  const getFilmInfo = () => {
    dispatch(getFilmData(title));
  };

  useEffect(() => {
    getFilmInfo();
  }, [title]);

  return (
    <div className="films-root">
      <div className="search-sect">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="filmSearch"
          placeholder="Film Name"
        />
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        <Select value={page} style={{ width: 120 }} className="selectMain" onChange={handleChange}>
          <Option value="1">Page 1</Option>
          <Option value="2">Page 2</Option>
          <Option value="3">Page 3</Option>
          <Option value="4">Page 4</Option>
          <Option value="5">Page 5</Option>
        </Select>
      </div>
      {data.data &&
        data.data?.map((item: IItems) => (
          <div key={item.id} className="film-main">
            <div className="only-pic">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                className="film-backdrop"
              />
            </div>
            <div className="ony-desc">
              <h3>Title: {item.title}</h3>
              <h4>Release Date: {item.release_date}</h4>
              <h4>Average Vote: {item.vote_average}</h4>
              <p>Overview: {item.overview}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Films;
