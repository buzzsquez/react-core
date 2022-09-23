import React from 'react';
import styles from './style.module.css';
import Title from '../Title';
import Field from '../Field';
import Area from '../Area';
import Button from '../Button';

function Form({ ...props }) {
  const {
    name,
    surname,
    date,
    phone,
    site,
    about,
    stack,
    project,
    isEmptyField,
    validErrors,
    onChange,
    onBlur,
    onSubmit,
    onClick,
  } = props;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Title />
      <Field
        name="name"
        title="Имя*"
        type="text"
        value={name}
        onChange={onChange}
        onBlur={onBlur}
        isEmptyField={isEmptyField && !name.trim()}
        isNotValid={validErrors.name}
        warningMessage="Имя должно начинаться с большой буквы"
      />
      <Field
        name="surname"
        title="Фамилия*"
        type="text"
        value={surname}
        onChange={onChange}
        onBlur={onBlur}
        isEmptyField={isEmptyField && !surname.trim()}
        isNotValid={validErrors.surname}
        warningMessage="Фамилия должна начинаться с большой буквы"
      />
      <Field
        name="date"
        type="date"
        min="1922-01-01"
        max={new Date().toISOString().slice(0, 10)}
        title="Дата Рождения*"
        onChange={onChange}
        onBlur={onBlur}
        isEmptyField={isEmptyField && !date.trim()}
      />
      <Field
        name="phone"
        type="text"
        title="Телефон*"
        maxlength="12"
        value={phone}
        onChange={onChange}
        onBlur={onBlur}
        isEmptyField={isEmptyField && !phone.trim()}
        isNotValid={validErrors.phone}
        warningMessage="Неверный формат номера"
      />
      <Field
        name="site"
        type="text"
        title="Сайт*"
        value={site}
        onChange={onChange}
        onBlur={onBlur}
        isEmptyField={isEmptyField && !site.trim()}
        isNotValid={validErrors.site}
        warningMessage={'Адрес сайта должен начианться с "https://"'}
      />
      <Area
        name="about"
        rows="7"
        placeholder="О себе*"
        value={about}
        onChange={onChange}
        onBlur={onBlur}
        isEmptyField={isEmptyField && !about.trim()}
        isNotValid={validErrors.about}
        warningMessage="Превышен лимит символов в поле"
      />
      <Area
        name="stack"
        rows="7"
        placeholder="Стек технологий*"
        value={stack}
        onChange={onChange}
        onBlur={onBlur}
        isEmptyField={isEmptyField && !stack.trim()}
        isNotValid={validErrors.stack}
        warningMessage="Превышен лимит символов в поле"
      />
      <Area
        name="project"
        rows="7"
        placeholder="Описание последнего проекта*"
        value={project}
        onChange={onChange}
        onBlur={onBlur}
        isEmptyField={isEmptyField && !project.trim()}
        isNotValid={validErrors.project}
        warningMessage="Превышен лимит символов в поле"
      />
      <div className={styles.buttons}>
        <Button type="submit" value="Сохранить" />
        <Button type="reset" value="Отмена" onClick={onClick} />
      </div>
    </form>
  );
}

export default Form;
