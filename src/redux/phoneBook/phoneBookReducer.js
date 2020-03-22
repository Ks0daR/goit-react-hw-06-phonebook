import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  filteredContacts,
  clearFilterValue,
} from './phoneBookActions';

const contactsBase = createReducer([], {
  [addContact.type]: (state, { payload }) => [...state, payload.contactInfo],
  [removeContact.type]: (state, { payload }) =>
    state.filter(element => payload !== element.id),
});

const filter = createReducer('', {
  [clearFilterValue.type]: (state, action) => '',
  [filteredContacts.type]: (state, { payload }) => payload,
});

export default combineReducers({ contactsBase, filter });
