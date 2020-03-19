import { ADD, REMOVE, FILTER } from './phoneBookTypes';
import { combineReducers } from 'redux';

const contactsBase = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload.contactInfo];

    case REMOVE:
      return state.filter(element => payload.id !== element.id);

    default:
      return state;
  }
};
// filteredContacts = () => {
//   const { searchQuery, contacts } = this.state;
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   );
// };
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({ contactsBase, filter });
