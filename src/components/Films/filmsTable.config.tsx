import React from 'react';
import { Tag, Col } from 'antd';

import { genres, languages } from './films.constants';

import styles from './Films.module.scss';

export const movieDataTableConfig = (openDrawer: any) => {
  const columns = [
    { title: 'Original Title', dataIndex: 'original_title', key: 'original_title', width: '20%' },
    {
      title: 'Original Language',
      dataIndex: 'original_language',
      key: 'original_language',
      render: (language: string) => {
        for (let i = 0; i < languages.length; i++) {
          if (language === languages[i].key) {
            return languages[i].language;
          }
        }
      },
    },
    { title: 'Release Date', dataIndex: 'release_date', key: 'release_date', width: '15%' },
    { title: 'Vote Average', dataIndex: 'vote_average', key: 'vote_average' },
    { title: 'Overview', dataIndex: 'overview', key: 'overview', width: '30%' },
    {
      title: 'Genres',
      dataIndex: 'genre_ids',
      key: 'genre_ids',
      width: '20%',
      tags: [],
      render: (genre: number[]) => {
        return genre.map((item: number) => {
          for (let i = 0; i < genres.length; i++) {
            if (item === genres[i].key) {
              return (
                <Tag key={genres[i].key} color={'blue'}>
                  {genres[i].genre_name}
                </Tag>
              );
            }
          }
        });
      },
    },
    {
      title: 'Poster',
      dataIndex: 'poster_path',
      key: 'poster_path',
      width: '20%',
      render: (poster: string) => {
        return (
          <Col className={styles['img-root']}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              className={styles['img-table']}
              onClick={openDrawer}
              id={poster}
            />
          </Col>
        );
      },
    },
  ];
  return columns;
};
