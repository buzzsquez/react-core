import React, { useState } from 'react'
import { pencilIcon, doneIcon, trashIcon } from './constants'
import styles from './style.module.css'
import { ItemType } from "../../redux/reducer"

type TodoItemProps ={
  item: ItemType;
  updateTodo: (params:{ id: number, item: string } ) => void;
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

function TodoItem ({
  item, updateTodo, removeTodo, completeTodo
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [value, setValue] = useState<string>(item.item)

  function handleStartEdit () {
    setIsEditing(true)
  }

  function handleUpdateTask () {
    updateTodo({ id: item.id, item: value })
    setIsEditing(false)
  }

  const handleEdit = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const handleComplete = () => {
    if (!isEditing) {
      completeTodo(item.id)
    }
  }

  return (
    <li key={item.id} className={styles.item}>
      <div role="button" onClick={handleComplete}>
        <input
          type="text"
          className={item.completed
            ? styles.done
            : styles.input}
          disabled={!isEditing}
          defaultValue={item.item}
          onChange={handleEdit}
        />
      </div>
      <div className={styles.buttons}>
        {isEditing
          ? (
          <button type="button" className={styles.button} onClick={handleUpdateTask}>
            <span className={styles.icon}>
              {doneIcon}
            </span>
          </button>
            )
          : (
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
  )
}

export default TodoItem
