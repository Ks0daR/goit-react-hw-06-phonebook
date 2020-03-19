import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filteredContacts } from '../../redux/phoneBook/phoneBookActions';
import styles from './FilterForm.module.css';

function FilterForm({ filterValue, onSearchQuery }) {
  return (
    <label className={styles.search}>
      <input
        value={filterValue}
        onChange={e => onSearchQuery(e.target.value)}
      />
    </label>
  );
}

FilterForm.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onSearchQuery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = {
  onSearchQuery: filteredContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
