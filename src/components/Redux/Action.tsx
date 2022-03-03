import { AxiosResponse } from 'axios';
import { IItems } from '../Films/Films';
import { GET_FILM_DATA, GET_FILM_DATA_FAILED, GET_FILM_DATA_REQUEST } from './ActionType';
import { IState } from './Reducer';
import { getFilmService } from './Services';

export const getFilmData = (title: string) => {
  return (dispatch: any) => {
    dispatch(request());
    getFilmService(title)
      .then((response) => {
        console.log('response', response);
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
