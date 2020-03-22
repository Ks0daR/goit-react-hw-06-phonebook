import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phoneBook/add', (name, number) => ({
  payload: {
    contactInfo: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const removeContact = createAction('phoneBook/remove');

const filteredContacts = createAction('phoneBook/filtered');

const clearFilterValue = createAction('phoneBook/clearValue');

export { addContact, removeContact, filteredContacts, clearFilterValue };
