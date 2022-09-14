import React from 'react';
import Field from '../Field';
import Area from '../Area';
import Button from '../Button';
import styles from './style.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.dateRef = React.createRef();
    this.phoneRef = React.createRef();
    this.siteRef = React.createRef();
    this.aboutRef = React.createRef();
    this.stackRef = React.createRef();
    this.projectRef = React.createRef();
  }

  render() {
    return (
      <form className={styles.form}>
        <Field forwardRef={this.nameRef} id="name" title="Имя" />
        <Field forwardRef={this.surnameRef} id="surname" title="Фамилия" />
        <Field forwardRef={this.dateRef} id="date" type="date" title="Дата Рождения" />
        <Field forwardRef={this.phoneRef} id="phone" type="tel" title="Телефон" />
        <Field forwardRef={this.siteRef} id="site" type="url" title="Сайт" />
        <Area forwardRef={this.aboutRef} rows="7" name="О себе" />
        <Area forwardRef={this.stackRef} rows="7" name="Стек технологий" />
        <Area forwardRef={this.projectRef} rows="7" name="Описание последнего проекта" />
        <div className={styles.buttons}>
          <Button type="submit" value="Сохранить" />
          <Button onClick={this.handleClick} type="reset" value="Отмена" />
        </div>
      </form>
    );
  }
}

export default Form;
