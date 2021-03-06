import axios from 'axios';

import { IMovieDataItems, IVideoItem } from '../../components/pages/MoviesPage/Movies';
import {
  byGenreURL,
  byQueryURL,
  topRatedURL,
  upcomingURL,
  popularURL,
  videoURL,
} from './constants';

export const getFilmByGenreService = async (genre: number): Promise<IMovieDataItems[]> => {
  const data = await axios.get(`${byGenreURL}${genre}`);
  return data.data.results;
};

export const getFilmByQueryService = async (title: string): Promise<IMovieDataItems[]> => {
  const data = await axios.get(`${byQueryURL}${title}`);

  return data.data.results;
};

export const getFilmTopRated = async (): Promise<IMovieDataItems[]> => {
  const data = await axios.get(`${topRatedURL}`);

  return data.data.results;
};

export const getFilmUpcoming = async (): Promise<IMovieDataItems[]> => {
  const data = await axios.get(`${upcomingURL}`);

  return data.data.results;
};

export const getTvShowPopular = async (): Promise<IMovieDataItems[]> => {
  const data = await axios.get(`${popularURL}`);

  return data.data.results;
};

export const getVideoData = async (movieID: string | null | undefined): Promise<IVideoItem[]> => {
  const data = await axios.get(videoURL(movieID));

  return data.data.results;
};
