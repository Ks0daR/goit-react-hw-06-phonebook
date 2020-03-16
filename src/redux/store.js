import { createStore, combineReducers } from 'redux';
import themeReducer from './theme/themeReduser';

const rootReducer = combineReducers({ theme: themeReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
