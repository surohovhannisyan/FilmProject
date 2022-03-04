import { IItems } from '../Films/Films';
import { GET_FILM_DATA, GET_FILM_DATA_FAILED, GET_FILM_DATA_REQUEST } from './ActionType';
import { getFilmService } from './Services';

export const getFilmData = (genre: number) => {
  return (dispatch: any) => {
    dispatch(request());
    getFilmService(genre)
      .then((response) => {
        dispatch(success(response));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {
      type: GET_FILM_DATA_REQUEST,
    };
  }

  function success(data: IItems[]) {
    return {
      type: GET_FILM_DATA,
      payload: data,
    };
  }

  function failure(error: string) {
    return {
      type: GET_FILM_DATA_FAILED,
      payload: { data: null, error: error },
    };
  }
};
