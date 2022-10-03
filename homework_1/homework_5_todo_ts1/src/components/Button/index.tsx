import styles from './style.module.css';
import React from 'react';

type ButtonProps = {
  type: "button" | "submit" | "reset";
}

function Button({ type } : ButtonProps) {
  return <button className={styles.save} type={type} aria-label="save name">Save</button>;
}

export default Button;
