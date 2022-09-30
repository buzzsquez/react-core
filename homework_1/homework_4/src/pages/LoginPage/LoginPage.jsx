import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

const state = {
  name: '',
  isEmptyField: false,
};

function LoginPage() {
  const [name, setName] = useState(state.name);
  const [isEmptyField, setIsEmptyField] = useState(state.isEmptyField);
  const navigate = useNavigate();

  function handleChange(event) {
    setName(event.target.value);
    setIsEmptyField(false);
  }

  function handleBlur(event) {
    setName(event.target.value.trim());
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name.length === 0) {
      setIsEmptyField(true);

      return;
    }

    navigate('/todo', { state: { name } });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>ENTER YOUR NAME</h1>
      <Input
        name="name"
        title="Name*"
        type="text"
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
        isEmptyField={isEmptyField}
      />
      <Button type="submit" />
    </form>
  );
}

export default LoginPage;
