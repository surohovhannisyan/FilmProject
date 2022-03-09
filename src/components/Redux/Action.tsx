import { IItems } from '../Films/Films';
import {
  GET_FILM_DATA,
  GET_FILM_DATA_FAILED,
  GET_FILM_DATA_BY_QUERY,
  GET_FILM_DATA_BY_QUERY_FAILED,
  GET_FILM_TOP_RATED,
  GET_FILM_TOP_RATED_FAILED,
  GET_FILM_UPCOMING,
  GET_FILM_UPCOMING_FAILED,
} from './ActionType';
import {
  getFilmByGenreService,
  getFilmByQueryService,
  getFilmTopRated,
  getFilmUpcoming,
} from './Services';

export const getFilmDataUpcoming = () => {
  return (dispatch: any) => {
    getFilmUpcoming()
      .then((response) => {
        dispatch(getUpcoming(response));
      })
      .catch((error) => {
        dispatch(getUpcomingFailed(error));
      });
  };

  function getUpcoming(data: IItems[]) {
    return {
      type: GET_FILM_UPCOMING,
      payload: data,
    };
  }

  function getUpcomingFailed(error: string) {
    return {
      type: GET_FILM_UPCOMING_FAILED,
      payload: { data: null, error: error },
    };
  }
};

export const getFilmDataTopRated = () => {
  return (dispatch: any) => {
    getFilmTopRated()
      .then((response) => {
        dispatch(getTopRated(response));
      })
      .catch((error) => {
        dispatch(getTopRatedError(error));
      });
  };

  function getTopRated(data: IItems[]) {
    return {
      type: GET_FILM_TOP_RATED,
      payload: data,
    };
  }

  function getTopRatedError(error: string) {
    return {
      type: GET_FILM_TOP_RATED_FAILED,
      payload: { data: null, error: error },
    };
  }
};

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
