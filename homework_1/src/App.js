import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.main}>
      <Title />
      <Form />
    </div>
  );
}

export default App;
