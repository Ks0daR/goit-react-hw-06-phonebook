import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ elements, onRemoveContacts, theme }) => {
  return (
    <>
      <h2 className={theme ? styles.Title : styles.TitleDark}>Contacts</h2>
      <ul className={styles.list}>
        {elements.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onRemove={() => null}
            theme={theme}
          />
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ theme: state.theme });

export default connect(mapStateToProps)(Contacts);
