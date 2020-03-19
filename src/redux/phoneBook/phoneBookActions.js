import { ADD_CONTACT, REMOVE_CONTACT } from './phoneBookTypes';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    contactInfo: {
      id: uuidv4(),
      name,
      number,
    },
  },
});

const removeContact = id => ({
  type: REMOVE_CONTACT,
  payload: { id },
});

export { addContact, removeContact };
