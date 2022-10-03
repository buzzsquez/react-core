import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/reducer'
import styles from './style.module.css'
import * as React from 'react'

const AddTask: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const dispatch = useDispatch()

  function handleChange (event: React.ChangeEvent<HTMLInputElement>): void {
    setTodo(event.target.value)
  }

  function addTask (): void {
    if (todo) {
      dispatch(addTodo({
        id: Math.floor(Math.random() * 1000) + 1,
        item: todo,
        completed: false
      }))
      setTodo('')
    }

    return;
  }

  return (
    <div className={styles.form}>
      <input
        type="text"
        onChange={handleChange}
        className={styles.input}
        value={todo}
      />
      <button type="button" className={styles.add} onClick={addTask}>Add</button>
    </div>
  )
}

export default AddTask
