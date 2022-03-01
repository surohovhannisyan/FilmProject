import { combineReducers } from 'redux';
import filmData from './components/Redux/Reducer';
const rootReducer = combineReducers({
  film: filmData,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
