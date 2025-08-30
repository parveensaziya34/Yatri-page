// redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import bookingReducer from './bookingSlice';

const rootReducer = combineReducers({
  booking: bookingReducer
});

export default rootReducer;