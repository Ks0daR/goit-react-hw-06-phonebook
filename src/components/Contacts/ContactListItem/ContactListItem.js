import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeContact } from '../../../redux/phoneBook/phoneBookActions';
import styles from './ContactIlstItem.module.css';

function ContactListItem({ id, elements, theme, onRemove }) {
  const { name, number } = elements.find(element => id === element.id);
  return (
    <li className={theme ? styles.ListElement : styles.ListElementDark}>
      {name} {number}
      <button
        type="button"
        className={theme ? styles.Button : styles.ButtonDark}
        onClick={() => onRemove(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  theme: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  theme: state.theme,
  elements: state.contacts.contactsBase,
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
