import { useState } from 'react';
import { pencilIcon, doneIcon, trashIcon } from './constants';
import styles from './style.module.css';

function TodoItem({
  item, updateTodo, removeTodo, completeTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(item.item);

  function handleStartEdit() {
    setIsEditing(true);
  }

  function handleUpdateTask() {
    updateTodo({ id: item.id, item: value });
    setIsEditing(false);
  }

  const handleEdit = (event) => {
    setValue(event.target.value);
  };

  const handleComplete = () => {
    if (!isEditing) {
      completeTodo(item.id);
    }
  };

  return (
    <li key={item.id} className={styles.item}>
      <div role="button" onClick={handleComplete}>
        <input
          type="text"
          className={item.completed
            ? styles.done : styles.input}
          disabled={!isEditing}
          defaultValue={item.item}
          onChange={handleEdit}
        />
      </div>
      <div className={styles.buttons}>
        {isEditing ? (
          <button type="button" className={styles.button} onClick={handleUpdateTask}>
            <span className={styles.icon}>
              {doneIcon}
            </span>
          </button>
        ) : (
          <button
            type="button"
            className={item.completed ? styles.hide : styles.button}
            onClick={handleStartEdit}
            disabled={item.completed}
          >
            <span className={styles.icon}>
              {pencilIcon}
            </span>
          </button>
        )}
        <button type="button" className={styles.button} onClick={() => removeTodo(item.id)}>
          <span className={styles.icon}>
            {trashIcon}
          </span>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
