import { combineReducers } from 'redux';
import { filmData, upcomingFilmData, movieVideoData } from './store/redux/reducer';

const rootReducer = combineReducers({
  film: filmData,
  upcomingFilms: upcomingFilmData,
  videos: movieVideoData,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
