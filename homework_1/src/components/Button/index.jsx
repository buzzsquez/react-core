import React from 'react';
import styles from './style.module.css';

class Button extends React.Component {
  render() {
    return (
      <>
        <input className={styles.input} type={this.props.type} value={this.props.value} />
      </>
    );
  }
}

export default Button;
