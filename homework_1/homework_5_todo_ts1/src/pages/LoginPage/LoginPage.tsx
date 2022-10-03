import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'
import Input from '../../components/Input'
import Button from '../../components/Button'

type State = {
  name: string;
  isEmptyField: boolean;
}

const state: State = {
  name: '',
  isEmptyField: false
}

const LoginPage: React.FC = () => {
  const [name, setName] = useState<string>(state.name)
  const [isEmptyField, setIsEmptyField] = useState<boolean>(state.isEmptyField)
  const navigate = useNavigate()

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
    setIsEmptyField(false)
  }

  function handleBlur (event: React.FocusEvent<HTMLInputElement>) {
    setName(event.target.value.trim())
  }

  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (name.length === 0) {
      setIsEmptyField(true)

      return
    }

    navigate('/todo', { state: { name } })
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
  )
}

export default LoginPage
