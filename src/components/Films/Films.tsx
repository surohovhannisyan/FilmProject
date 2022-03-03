import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmData } from '../Redux/Action';
import { RootState } from '../../Reducers';
import { Input } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';

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
interface Column {
  title: string;
  dataIndex: string;
  key: string;
}
const Films = () => {
  const data = useSelector((state: RootState) => state.film).data;
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const getFilmInfo = () => {
    dispatch(getFilmData(title));
  };

  useEffect(() => {
    getFilmInfo();
  }, [title]);

  const columns = [
    { title: 'Original Title', dataIndex: 'original_title', key: 'original_title' },
    { title: 'Original Language', dataIndex: 'original_language', key: 'original_language' },
    { title: 'Release Date', dataIndex: 'release_date', key: 'release_date' },
    { title: 'Vote Average', dataIndex: 'vote_average', key: 'vote_average' },
    { title: 'Overview', dataIndex: 'overview', key: 'overview' },
    {
      title: 'Poster',
      dataIndex: 'poster_path',
      key: 'poster_path',
      render: (Poster: any) => {
        return <img src={`https://image.tmdb.org/t/p/w500/${Poster}`} style={{ width: '250px' }} />;
      },
    },
  ];
  const dataArr: Array<{}> = [];
  data?.map((item) => {
    dataArr.push(item);
  });

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
      </div>
      <div className="filmTable">
        <Table columns={columns} dataSource={dataArr} />
      </div>
    </div>
  );
};

export default Films;
