import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ elements, theme }) => {
  return (
    <>
      <h2 className={theme ? styles.Title : styles.TitleDark}>Contacts</h2>
      <ul className={styles.list}>
        {elements.length > 0
          ? elements.map(({ id }) => <ContactListItem key={id} id={id} />)
          : null}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const { contactsBase, filter } = state.contacts;
  const visibleContacts = contactsBase.filter(element =>
    element.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return {
    theme: state.theme,
    elements: visibleContacts,
  };
};

export default connect(mapStateToProps)(Contacts);
