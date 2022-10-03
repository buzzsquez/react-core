import React from 'react'
import styles from './style.module.css';

type InputProps = {
  type: 'text';
  name: string;
  value: string;
  title: string;
  isEmptyField: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};

function Input({ ...props }: InputProps) {
  const {
    name, value, onChange, onBlur, type, title, isEmptyField,
  } = props;

  return (
    <>
      <input
        value={value}
        className={styles.input}
        type={type}
        name={name}
        placeholder={title}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isEmptyField && <div className={styles.fieldError}>Type your name, please!</div>}
    </>
  );
}

export default Input;
