import React from 'react';

export const columns = [
  { title: 'Original Title', dataIndex: 'original_title', key: 'original_title', width: '20%' },
  { title: 'Original Language', dataIndex: 'original_language', key: 'original_language' },
  { title: 'Release Date', dataIndex: 'release_date', key: 'release_date' },
  { title: 'Vote Average', dataIndex: 'vote_average', key: 'vote_average' },
  { title: 'Overview', dataIndex: 'overview', key: 'overview', width: '30%' },
  { title: 'Genres', dataIndex: 'genre_ids', key: 'genre_ids' },
  {
    title: 'Poster',
    dataIndex: 'poster_path',
    key: 'poster_path',
    width: '30%',
    render: (Poster: any) => {
      return <img src={`https://image.tmdb.org/t/p/w500/${Poster}`} className="imgTable" />;
    },
  },
];
