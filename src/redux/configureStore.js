import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import assetReducer from './Home';
import detailReducer from './Detail';

const reducer = combineReducers({
  assetReducer,
  detailReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
