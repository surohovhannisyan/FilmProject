import { IItems } from '../Films/Films';
import {
  GET_FILM_DATA,
  GET_FILM_DATA_FAILED,
  GET_FILM_DATA_BY_QUERY,
  GET_FILM_DATA_BY_QUERY_FAILED,
} from './ActionType';
import { getFilmByGenreService, getFilmByQueryService } from './Services';

export const getFilmDataByGenre = (genre: number) => {
  return (dispatch: any) => {
    getFilmByGenreService(genre)
      .then((response) => {
        dispatch(getByGenre(response));
      })
      .catch((error) => {
        dispatch(getByGenreError(error));
      });
  };

  function getByGenre(data: IItems[]) {
    return {
      type: GET_FILM_DATA,
      payload: data,
    };
  }

  function getByGenreError(error: string) {
    return {
      type: GET_FILM_DATA_FAILED,
      payload: { data: null, error: error },
    };
  }
};

export const getFilmDataByQuery = (title: string) => {
  return (dispatch: any) => {
    getFilmByQueryService(title)
      .then((response) => {
        dispatch(getByQuery(response));
      })
      .catch((error) => {
        dispatch(getByQueryError(error));
      });
  };

  function getByQuery(data: IItems[]) {
    return {
      type: GET_FILM_DATA_BY_QUERY,
      payload: data,
    };
  }

  function getByQueryError(error: string) {
    return {
      type: GET_FILM_DATA_BY_QUERY_FAILED,
      payload: { data: null, error: error },
    };
  }
};
