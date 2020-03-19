import { ADD_CONTACT, REMOVE_CONTACT } from './phoneBookTypes';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload.contactInfo];

    case REMOVE_CONTACT:
      return state.filter(element => payload.id !== element.id);

    default:
      return state;
  }
};

export { contactReducer };
