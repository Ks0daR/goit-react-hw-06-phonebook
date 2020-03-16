import TOGGLE_THEME from './themeTypes';

const themeReduser = (state = true, actions) => {
  switch (actions.type) {
    case TOGGLE_THEME:
      return (state = !state);

    default:
      return state;
  }
};

export default themeReduser;
