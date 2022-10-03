import React from 'react';
import styles from './style.module.css';

class Field extends React.Component {
  render() {
    return (
      <>
        <label className={styles.label} htmlFor={this.props.id}>
          {this.props.title}
        </label>
        <input
          ref={this.props.forwardRef}
          className={styles.input}
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.title}
        />
      </>
    );
  }
}

export default Field;
