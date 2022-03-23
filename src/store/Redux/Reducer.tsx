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
} from './ActionType';
import { IMovieDataItems } from '../../components/pages/Films/Films';

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
