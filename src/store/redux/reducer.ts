import { Reducer } from 'redux';

import {
  GET_FILM_DATA,
  GET_FILM_DATA_BY_QUERY,
  GET_FILM_DATA_FAILED,
  GET_FILM_DATA_BY_QUERY_FAILED,
  GET_FILM_TOP_RATED,
  GET_FILM_TOP_RATED_FAILED,
  GET_FILM_UPCOMING,
  GET_FILM_UPCOMING_FAILED,
  GET_MOVIES_POPULAR,
  GET_MOVIES_POPULAR_FAILED,
} from './actiontype';
import { IMovieDataItems } from '../../components/pages/MoviesPage/Movies';

export interface IReducerState {
  data?: IMovieDataItems[];
  error?: unknown | string;
}

export interface IReducerAction {
  type: string;
  payload: IMovieDataItems[];
}

export const state = {
  data: undefined,
  error: '',
};

export const filmData: Reducer<IReducerState, IReducerAction> = (state, action) => {
  switch (action.type) {
    case GET_FILM_DATA:
      return { ...state, data: action.payload };
    case GET_FILM_DATA_FAILED:
      return { ...state, error: action.payload };
    case GET_FILM_DATA_BY_QUERY:
      return { ...state, data: action.payload };
    case GET_FILM_DATA_BY_QUERY_FAILED:
      return { ...state, error: action.payload };
    case GET_FILM_TOP_RATED:
      return { ...state, data: action.payload };
    case GET_FILM_TOP_RATED_FAILED:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export const upcomingFilmData: Reducer<IReducerState, IReducerAction> = (state, action) => {
  switch (action.type) {
    case GET_FILM_UPCOMING:
      return { ...state, data: action.payload };
    case GET_FILM_UPCOMING_FAILED:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export const mostPopularMoviesData: Reducer<IReducerState, IReducerAction> = (state, action) => {
  switch (action.type) {
    case GET_MOVIES_POPULAR:
      return { ...state, data: action.payload };
    case GET_MOVIES_POPULAR_FAILED:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};
