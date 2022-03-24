import { combineReducers } from 'redux';
import { filmData, upcomingFilmData, mostPopularMoviesData } from './store/redux/reducer';

const rootReducer = combineReducers({
  film: filmData,
  upcomingFilms: upcomingFilmData,
  popular: mostPopularMoviesData,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
