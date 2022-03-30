import { combineReducers } from 'redux';
import {
  filmData,
  upcomingFilmData,
  mostPopularMoviesData,
  movieVideoData,
} from './store/redux/reducer';

const rootReducer = combineReducers({
  film: filmData,
  upcomingFilms: upcomingFilmData,
  popular: mostPopularMoviesData,
  videos: movieVideoData,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
