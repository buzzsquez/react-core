import React from 'react';
import styles from './style.module.css';

function Area({ ...props }) {
  const {
    name, value, onChange, onBlur, rows, placeholder, isEmptyField, warningMessage, isNotValid,
  } = props;

  return (
    <>
      <p className={styles.label}>{placeholder}</p>
      <textarea
        name={name}
        className={styles.textBlock}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength="2000"
      />
      {value.length <= 600 && <div className={styles.counter}>{`Осталось ${600 - value.length} / 600 символов`}</div>}
      {(isNotValid || value.length > 600) && <div className={styles.fieldError}>{warningMessage}</div>}
      {isEmptyField && <div className={styles.fieldError}>Поле пустое. Заполните пожалуйста</div>}
    </>
  );
}

export default Area;
