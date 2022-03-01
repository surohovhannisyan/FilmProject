import axios from 'axios';
import { IItems } from '../Films/Films';

import { IState } from './Reducer';

export const getFilmService = async (title: string): Promise<IItems[]> => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=15c32b97f897fcdcf60aac8f6e0746f4&language=en-US&page=1&include_adult=false&query=${title}`
  );

  return data.data.results;
};
