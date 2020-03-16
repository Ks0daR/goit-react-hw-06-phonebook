import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterForm.module.css';

function FilterForm({ filterValue, onSearchQuery }) {
  return (
    <label className={styles.search}>
      <input value={filterValue} onChange={() => null} />
    </label>
  );
}

FilterForm.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onSearchQuery: PropTypes.func.isRequired,
};

export default FilterForm;
