import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Carousel } from 'antd';

import { RootState } from '../../Reducers';
import { getFilmDataTopRated, getFilmDataUpcoming } from '../Redux/Action';

import 'antd/dist/antd.css';
import './Home.scss';

function Home() {
  const data = useSelector((state: RootState) => state.film).data;
  const upcomingData = useSelector((state: RootState) => state.upcomingFilms).data;
  const dispatch = useDispatch();

  const getFilmInfo = () => {
    dispatch(getFilmDataTopRated());
  };

  const getFilmInfoUpcoming = () => {
    dispatch(getFilmDataUpcoming());
  };

  useEffect(() => {
    getFilmInfo();
    getFilmInfoUpcoming();
  }, []);
  return (
    <Col className="home-root">
      <Col className="topRated">
        <Col className="titleOne">
          <h2>Upcoming</h2>
        </Col>
        <Carousel effect="fade" autoplay className="carousel-top-rated">
          {upcomingData?.map((item) => (
            <Row className="col-top-rated" key={item.id}>
              <Col className="col-top-rated-in">
                <Col className="pattern">
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                </Col>
                <Col className="main">
                  <h2>Title: {item.original_title}</h2> <hr />
                  <h3>Release Date: {item.release_date}</h3>
                  <h3>Original language: {item.original_language}</h3>
                  <h3>Vote average: {item.vote_average}</h3> <hr />
                  <p>
                    <b>Overview: </b> {item.overview}
                  </p>
                </Col>
              </Col>
            </Row>
          ))}
        </Carousel>
        <hr className="hrTop" />
        <Col className="titleTwo">
          <h2>Top Rated</h2>
        </Col>
        <Carousel dotPosition="top" autoplay className="carousel-upcoming">
          {data?.map((item) => (
            <Row className="col-upcoming" key={item.id}>
              <Col className="col-upcoming-in">
                <Col className="upcomingMain">
                  <h2>Title: {item.original_title}</h2> <hr />
                  <h3>Release Date: {item.release_date}</h3>
                  <h3>Original language: {item.original_language}</h3>
                  <h3>Vote average: {item.vote_average}</h3> <hr />
                  <p>
                    <b>Overview: </b> {item.overview}
                  </p>
                </Col>
                <Col className="upcomingPattern">
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                </Col>
              </Col>
            </Row>
          ))}
        </Carousel>
      </Col>
    </Col>
  );
}

export default Home;
