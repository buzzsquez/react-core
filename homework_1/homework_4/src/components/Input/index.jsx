import styles from './style.module.css';

function Input({ ...props }) {
  const {
    name, value, onChange, onBlur, type, title, isEmptyField,
  } = props;

  return (
    <>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
        type={type}
        name={name}
        placeholder={title}
      />
      {isEmptyField && <div className={styles.fieldError}>Type your name, please!</div>}
    </>
  );
}

export default Input;
