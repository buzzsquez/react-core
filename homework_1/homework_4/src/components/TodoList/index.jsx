import {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  completeTodo,
  removeTodo,
  updateTodo,
} from '../../redux/reducer';
import TodoItem from '../TodoItem';
import styles from './style.module.css';

function TodoList({ setTaskCount }) {
  const [sort, setSort] = useState('active');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const handleRemove = useCallback((id) => {
    dispatch(removeTodo(id));
  }, [dispatch]);

  const handleUpdate = useCallback((obj) => {
    dispatch(updateTodo(obj));
  }, [dispatch]);

  const handleComplete = useCallback((id) => {
    dispatch(completeTodo(id));
  }, [dispatch]);

  const completedTask = todos.filter((item) => item.completed === false);

  useEffect(() => {
    setTaskCount(completedTask.length);
  }, [setTaskCount, completedTask.length]);

  const todoItems = useMemo(() => todos.filter(({ completed }) => {
    if (sort === 'active') {
      return completed === false;
    }
    if (sort === 'completed') {
      return completed === true;
    }
    return true;
  }), [todos, sort]);

  return (
    <div className={styles.tasks}>
      <div className={styles.buttons}>
        <button type="button" className={styles.all} onClick={() => setSort('all')}>ALL</button>
        <button type="button" className={styles.active} onClick={() => setSort('active')}>ACTIVE</button>
        <button type="button" className={styles.completed} onClick={() => setSort('completed')}>COMPLETED</button>
      </div>
      <ul>
        {!!todoItems.length && todoItems.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            removeTodo={handleRemove}
            updateTodo={handleUpdate}
            completeTodo={handleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
