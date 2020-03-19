import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ elements, theme }) => {
  console.log(elements);
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
  onRemoveContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  theme: state.theme,
  elements: state.contacts.contactsBase,
});

export default connect(mapStateToProps)(Contacts);
