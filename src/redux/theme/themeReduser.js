import TOGGLE_THEME from './themeTypes';

const themeReduser = (state = true, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      return (state = !state);

    default:
      return state;
  }
};

export default themeReduser;
