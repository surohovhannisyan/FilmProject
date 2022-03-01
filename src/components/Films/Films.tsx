import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmData } from '../Redux/Action';
import { useState } from 'react';

import './Films.scss';
import { RootState } from '../../Reducers';

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
  console.log(data);
  const [title, setTitle] = useState('');
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
        <label>Search</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Search</button>
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
