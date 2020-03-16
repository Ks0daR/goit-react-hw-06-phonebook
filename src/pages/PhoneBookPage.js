import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import Contacts from '../components/Contacts';
import FilterForm from '../components/FilterForm';
import createContact from '../utils/createContact';

class PhoneBookPage extends Component {
  state = {
    contacts: [],
    searchQuery: '',
  };

  componentDidMount() {
    const storageItems = JSON.parse(localStorage.getItem('contacts'));
    if (storageItems) {
      this.setState({ contacts: [...storageItems] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  getUserInfo = ({ name, number }) => {
    const checkedName = this.checkedDoubleInput(name);
    if (checkedName) {
      alert(`Имя ${name} есть в телефонной книге!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, createContact(name, number)],
    }));
  };

  checkedDoubleInput = name => {
    return this.state.contacts.some(contact => contact.name === name);
  };

  filteredContacts = () => {
    const { searchQuery, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  removeContacts = contactId => {
    if (this.state.contacts.length === 2) {
      this.setState({ searchQuery: '' });
    }
    this.setState(state => {
      return {
        contacts: state.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  handleSearchQuery = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { contacts, searchQuery } = this.state;
    const visibleContacts = this.filteredContacts();
    return (
      <>
        <InputForm getInfo={this.getUserInfo} />
        {contacts.length > 1 && (
          <FilterForm
            onSearchQuery={this.handleSearchQuery}
            filterValue={searchQuery}
          />
        )}
        <Contacts
          elements={searchQuery.length === 0 ? contacts : visibleContacts}
          onRemoveContacts={this.removeContacts}
        />
      </>
    );
  }
}

export default PhoneBookPage;
