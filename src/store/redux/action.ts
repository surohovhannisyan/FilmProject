import { IMovieDataItems } from '../../components/pages/MoviesPage/Movies';
import {
  GET_FILM_DATA,
  GET_FILM_DATA_FAILED,
  GET_FILM_DATA_BY_QUERY,
  GET_FILM_DATA_BY_QUERY_FAILED,
  GET_FILM_TOP_RATED,
  GET_FILM_TOP_RATED_FAILED,
  GET_FILM_UPCOMING,
  GET_FILM_UPCOMING_FAILED,
  GET_MOVIES_POPULAR,
  GET_MOVIES_POPULAR_FAILED,
} from './actiontype';
import {
  getFilmByGenreService,
  getFilmByQueryService,
  getFilmTopRated,
  getFilmUpcoming,
  getTvShowPopular,
} from './services';

interface IDispatch {
  (arg: { type: string; payload: IMovieDataItems[] | { data: null; error: unknown } }): void;
}

export const getMoviesPopular = () => {
  return async (dispatch: IDispatch) => {
    try {
      const response = await getTvShowPopular();
      dispatch(getPopular(response));
    } catch (error) {
      dispatch(getPopularFailed(error));
    }
  };

  function getPopular(data: IMovieDataItems[]) {
    return {
      type: GET_MOVIES_POPULAR,
      payload: data,
    };
  }

  function getPopularFailed(error: string | unknown) {
    return {
      type: GET_MOVIES_POPULAR_FAILED,
      payload: { data: null, error: error },
    };
  }
};

export const getFilmDataUpcoming = () => {
  return async (dispatch: IDispatch) => {
    try {
      const response = await getFilmUpcoming();
      dispatch(getUpcoming(response));
    } catch (error) {
      dispatch(getUpcomingFailed(error));
    }
  };

  function getUpcoming(data: IMovieDataItems[]) {
    return {
      type: GET_FILM_UPCOMING,
      payload: data,
    };
  }

  function getUpcomingFailed(error: string | unknown) {
    return {
      type: GET_FILM_UPCOMING_FAILED,
      payload: { data: null, error: error },
    };
  }
};

export const getFilmDataTopRated = () => {
  return async (dispatch: IDispatch) => {
    try {
      const response = await getFilmTopRated();
      dispatch(getTopRated(response));
    } catch (error) {
      dispatch(getTopRatedError(error));
    }
  };

  function getTopRated(data: IMovieDataItems[]) {
    return {
      type: GET_FILM_TOP_RATED,
      payload: data,
    };
  }

  function getTopRatedError(error: string | unknown) {
    return {
      type: GET_FILM_TOP_RATED_FAILED,
      payload: { data: null, error: error },
    };
  }
};

export const getFilmDataByGenre = (genre: number) => {
  return async (dispatch: IDispatch) => {
    try {
      const response = await getFilmByGenreService(genre);
      dispatch(getByGenre(response));
    } catch (error) {
      dispatch(getByGenreError(error));
    }
  };

  function getByGenre(data: IMovieDataItems[]) {
    return {
      type: GET_FILM_DATA,
      payload: data,
    };
  }

  function getByGenreError(error: string | unknown) {
    return {
      type: GET_FILM_DATA_FAILED,
      payload: { data: null, error: error },
    };
  }
};

export const getFilmDataByQuery = (title: string) => {
  return async (dispatch: IDispatch) => {
    try {
      const response = await getFilmByQueryService(title);
      dispatch(getByQuery(response));
    } catch (error) {
      dispatch(getByQueryError(error));
    }
  };

  function getByQuery(data: IMovieDataItems[]) {
    return {
      type: GET_FILM_DATA_BY_QUERY,
      payload: data,
    };
  }

  function getByQueryError(error: string | unknown) {
    return {
      type: GET_FILM_DATA_BY_QUERY_FAILED,
      payload: { data: null, error: error },
    };
  }
};
