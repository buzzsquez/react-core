import styles from './style.module.css';

function Button({ type }) {
  return <button className={styles.save} type={type} aria-label="save name">Save</button>;
}

export default Button;
