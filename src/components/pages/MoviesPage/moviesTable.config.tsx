import React from 'react';
import { Tag, Col, Button } from 'antd';

import { genres, languages } from './movies.constants';
import { IMovieDataItems } from './Movies';

import styles from './Movies.module.scss';

export const movieDataTableConfig = (
  openModal: React.MouseEventHandler<HTMLImageElement> | undefined,
  changeGenre: React.MouseEventHandler<HTMLSpanElement> | undefined
) => {
  const columns = [
    { title: 'Original Title', dataIndex: 'original_title', key: 'original_title', width: '15%' },
    {
      title: 'Original Language',
      dataIndex: 'original_language',
      key: 'original_language',
      width: '15%',
      render: (language: string) => {
        for (let i = 0; i < languages.length; i++) {
          if (language === languages[i].key) {
            return languages[i].language;
          }
        }
      },
    },
    { title: 'Release Date', dataIndex: 'release_date', key: 'release_date', width: '10%' },
    { title: 'Vote Average', dataIndex: 'vote_average', key: 'vote_average', width: '10%' },
    { title: 'Overview', dataIndex: 'overview', key: 'overview', width: '25%' },
    {
      title: 'Genres',
      dataIndex: 'genre_ids',
      key: 'genre_ids',
      width: '10%',
      tags: [],
      render: (genre: number[]) => {
        return genre.map((item: number) => {
          for (let i = 0; i < genres.length; i++) {
            if (item === genres[i].key) {
              return (
                <Col key={genres[i].key}>
                  <Tag
                    id={`${genres[i].key}`}
                    color={'blue'}
                    className={styles.tag}
                    onClick={changeGenre}
                  >
                    {genres[i].genre_name}
                  </Tag>
                </Col>
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
      width: '30%',
      render: (poster: string, id: IMovieDataItems) => {
        return (
          <Col className={styles['pattern-main']}>
            <Col className={styles['img-root']} key={id.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                className={styles['img-table']}
                id={`${id.id}`}
                onClick={openModal}
              />
            </Col>
            <Button id={`${id.id}`} className={styles.watchlater}>
              Watch Later
            </Button>
          </Col>
        );
      },
    },
  ];
  return columns;
};
