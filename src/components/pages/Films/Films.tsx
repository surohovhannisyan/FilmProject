import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Table, Col, Input, Modal, Carousel, Typography } from 'antd';

import { getFilmDataByGenre, getFilmDataByQuery } from '../../../store/Redux/Action';
import { RootState } from '../../../Reducers';
import { movieDataTableConfig } from './filmsTable.config';
import { genres } from './films.constants';

import styles from './Films.module.scss';
// import 'antd/dist/antd.css';

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

interface IVideoItem {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string | null;
  name: string;
  official: true;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

const { Title } = Typography;

export const Films = () => {
  const { data } = useSelector((state: RootState) => state.film);
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<number>(16);
  const [videoData, setVideoData] = useState([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
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

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onCancel = () => {
    setIsVisible(false);
  };

  const openModal = async (e: React.MouseEvent<HTMLImageElement>) => {
    setIsVisible(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${e.currentTarget.id}/videos?api_key=15c32b97f897fcdcf60aac8f6e0746f4&language=en-US`
    );
    setVideoData(data.results);
  };

  return (
    <Col className={styles['films-root']}>
      <Col className={styles['search-sect']}>
        <Select
          onChange={selectChangeHandler}
          placeholder="Genres"
          className={styles['select-genre']}
        >
          {genres.map((item) => (
            <Option key={item.key} value={item.key}>
              {item.genre_name}
            </Option>
          ))}
        </Select>
        <Input
          type="text"
          value={title}
          onChange={inputChangeHandler}
          placeholder="Search by title"
        />
      </Col>
      <Modal
        title="Videos"
        visible={isVisible}
        closable={true}
        onOk={onCancel}
        onCancel={onCancel}
        width={'45%'}
      >
        <Carousel>
          {videoData?.map((item: IVideoItem) => (
            <Col key={item.id}>
              <Col className={styles.titlemodal}>
                <Title level={3}>{item.name}</Title>
              </Col>
              <Col>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${item.key}`}
                  controls={true}
                  playing={false}
                  volume={1}
                  width={'100%'}
                  className={styles.player}
                />
              </Col>
            </Col>
          ))}
        </Carousel>
      </Modal>
      <Col className={styles['film-table']}>
        <Table
          columns={movieDataTableConfig(openModal)}
          dataSource={data}
          className={styles['table-main']}
          pagination={false}
          rowKey={'id'}
        />
      </Col>
    </Col>
  );
};

export default Films;
