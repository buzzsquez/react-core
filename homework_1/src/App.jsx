import React from 'react';
import styles from './App.module.css';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <div className={styles.main}>
      <Questionnaire />
    </div>
  );
}

export default App;
