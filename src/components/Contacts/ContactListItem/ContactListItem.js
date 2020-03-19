import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeContact } from '../../../redux/phoneBook/phoneBookActions';
import styles from './ContactIlstItem.module.css';

function ContactListItem({ name, number, theme, onRemove }) {
  return (
    <li className={theme ? styles.ListElement : styles.ListElementDark}>
      {name} {number}
      <button
        type="button"
        className={theme ? styles.Button : styles.ButtonDark}
        onClick={onRemove}
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

const mapStateToProps = ({ theme, contacts }, { id }) => {
  const item = contacts.contactsBase.find(element => element.id === id);
  return {
    theme,
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
