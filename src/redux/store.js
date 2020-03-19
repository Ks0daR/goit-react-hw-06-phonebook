import { createStore, combineReducers } from 'redux';
import themeReducer from './theme/themeReduser';
import phoneBookReducer from './phoneBook/phoneBookReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  contacts: phoneBookReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
