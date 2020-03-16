import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './InputForm.module.css';

class InputForm extends Component {
  static propTypes = {
    theme: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    getInfo: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  getInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.getInfo(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { theme } = this.props;

    return (
      <>
        <form className={styles.Form} onSubmit={this.hendleSubmit}>
          <label>
            <h3 className={theme ? styles.Title : styles.TitleDark}>Name:</h3>
            <input
              value={name}
              placeholder="Enter name..."
              name="name"
              onChange={this.getInputValue}
            />
            <h3 className={theme ? styles.title : styles.TitleDark}>
              Phone number:
            </h3>
            <input
              value={number}
              name="number"
              onChange={this.getInputValue}
              placeholder="Enter phone..."
            />
            <br />
            <button
              className={theme ? styles.Submit : styles.SubmitDark}
              type="submit"
            >
              Add contact
            </button>
            <br />
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({ theme: state.theme });

export default connect(mapStateToProps)(InputForm);
