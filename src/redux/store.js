import { createStore, combineReducers } from 'redux';
import themeReducer from './theme/themeReduser';
import { contactReducer } from './phoneBook/phoneBookReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  contacts: contactReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
