import { useLocation } from 'react-router';
import { useState } from 'react';
import TodoList from '../../components/TodoList';
import AddTask from '../../components/AddTask';
import styles from './style.module.css';

function TodoPage() {
  const { state } = useLocation();
  const { name } = state || {};
  const [taskCount, setTaskCount] = useState(0);

  return (
    <div className={styles.main}>
      <header className={styles.name}>
        {`${name}: ${taskCount}`}
      </header>
      <div className={styles.add}>
        <AddTask />
        <TodoList setTaskCount={setTaskCount} />
      </div>
    </div>
  );
}

export default TodoPage;
