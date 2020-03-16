import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactIlstItem.module.css';

function ContactListItem({ id, name, number, theme, onRemove }) {
  return (
    <li className={theme ? styles.ListElement : styles.ListElementDark}>
      {name} {number}
      <button
        type="button"
        className={theme ? styles.Button : styles.ButtonDark}
        onClick={() => null}
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

const mapStateToProps = state => ({ theme: state.theme });

export default connect(mapStateToProps)(ContactListItem);
