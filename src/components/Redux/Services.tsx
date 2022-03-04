import axios from 'axios';

import { IItems } from '../Films/Films';

export const getFilmService = async (genre: number): Promise<IItems[]> => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=15c32b97f897fcdcf60aac8f6e0746f4&with_genres=${genre}`
  );

  return data.data.results;
};
