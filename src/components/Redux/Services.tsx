import axios from 'axios';

import { IItems } from '../Films/Films';

export const getFilmByGenreService = async (genre: number): Promise<IItems[]> => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=15c32b97f897fcdcf60aac8f6e0746f4&with_genres=${genre}`
  );

  return data.data.results;
};

export const getFilmByQueryService = async (title: string): Promise<IItems[]> => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query=${title}`
  );

  return data.data.results;
};

export const getFilmTopRated = async (): Promise<IItems[]> => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=15c32b97f897fcdcf60aac8f6e0746f4&language=en-US&page=1`
  );

  return data.data.results;
};

export const getFilmUpcoming = async (): Promise<IItems[]> => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=15c32b97f897fcdcf60aac8f6e0746f4&language=en-US&page=1`
  );

  return data.data.results;
};
