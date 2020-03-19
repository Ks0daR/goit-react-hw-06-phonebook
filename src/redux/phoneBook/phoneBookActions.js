import { ADD, REMOVE, FILTER } from './phoneBookTypes';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: ADD,
  payload: {
    contactInfo: {
      id: uuidv4(),
      name,
      number,
    },
  },
});

const removeContact = id => ({
  type: REMOVE,
  payload: { id },
});

const filteredContacts = filter => ({
  type: FILTER,
  payload: {
    filter,
  },
});

export { addContact, removeContact, filteredContacts };
