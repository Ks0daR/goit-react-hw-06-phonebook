import React from 'react';
import InputForm from '../components/InputForm';
import Contacts from '../components/Contacts';
import FilterForm from '../components/FilterForm';

const PhoneBookPage = () => {
  // checkedDoubleInput = name => {
  //   return this.state.contacts.some(contact => contact.name === name);
  // };

  // filteredContacts = () => {
  //   const { searchQuery, contacts } = this.state;
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  //   );
  // };

  // handleSearchQuery = ({ target: { value } }) => {
  //   this.setState({ searchQuery: value });
  // };

  return (
    <>
      <InputForm />
      {/* <FilterForm /> */}
      <Contacts />
    </>
  );
};

export default PhoneBookPage;
