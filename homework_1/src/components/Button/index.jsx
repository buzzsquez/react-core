import React from 'react';
import styles from './style.module.css';

function Button({ ...props }) {
  return (
    <input className={styles.input} type={props.type} value={props.value} onClick={props.onClick} />
  );
}

export default Button;
