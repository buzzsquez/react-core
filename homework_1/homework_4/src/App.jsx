import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import LoginPage from './pages/LoginPage/LoginPage';
import TodoPage from './pages/TodoPage/TodoPage';

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
