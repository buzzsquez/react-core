import React from 'react';
import styles from './style.module.css';

class Field extends React.Component {
  render() {
    const {
      name,
      value,
      onChange,
      onBlur,
      type,
      title,
      maxlength,
      isEmptyField,
      min,
      max,
      warningMessage,
      isNotValid,
    } = this.props;

    return (
      <>
        <label className={styles.label} htmlFor={name}>
          {title}
        </label>
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={styles.input}
          type={type}
          name={name}
          placeholder={title}
          maxLength={maxlength}
          min={min}
          max={max}
        />
        {isEmptyField && <div className={styles.fieldError}>Поле пустое. Заполните пожалуйста</div>}
        {isNotValid && <div className={styles.fieldError}>{warningMessage}</div>}
      </>
    );
  }
}

export default Field;
