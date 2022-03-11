import React from 'react';
import styles from '../Films/Films.module.scss';

export const columns = [
  { title: 'Original Title', dataIndex: 'original_title', key: 'original_title', width: '20%' },
  { title: 'Original Language', dataIndex: 'original_language', key: 'original_language' },
  { title: 'Release Date', dataIndex: 'release_date', key: 'release_date' },
  { title: 'Vote Average', dataIndex: 'vote_average', key: 'vote_average' },
  { title: 'Overview', dataIndex: 'overview', key: 'overview', width: '30%' },
  {
    title: 'Poster',
    dataIndex: 'poster_path',
    key: 'poster_path',
    width: '20%',
    render: (poster: string) => {
      return <img src={`https://image.tmdb.org/t/p/w500/${poster}`} className={styles.imgTable} />;
    },
  },
];
