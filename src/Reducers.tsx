import { combineReducers } from 'redux';
import { filmData, upcomingFilmData } from './store/redux/reducer';

const rootReducer = combineReducers({
  film: filmData,
  upcomingFilms: upcomingFilmData,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
