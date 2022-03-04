import { GET_FILM_DATA, GET_FILM_DATA_FAILED } from './ActionType';
import { Reducer } from 'redux';
import { IItems } from '../Films/Films';

export interface IState {
  data?: IItems[];
  error?: string;
}

interface IAction {
  type: string;
  payload: any;
}

export const state = {
  data: undefined,
  error: '',
};

const filmData: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case GET_FILM_DATA:
      return { ...state, data: action.payload };
    case GET_FILM_DATA_FAILED:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default filmData;
