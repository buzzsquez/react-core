import React, { useState } from 'react';
import phoneMask from '../../helpers';
import validationRules from './validationRules';
import Form from '../Form';
import Profile from '../Profile';

const initialState = {
  formValues: {
    name: '',
    surname: '',
    date: '',
    phone: '',
    site: '',
    about: '',
    stack: '',
    project: '',
  },
  validErrors: {},
  isEmptyField: false,
  isProfileReady: false,
};

function Questionnaire() {
  const [formValues, setFormValues] = useState(initialState.formValues);
  const [validErrors, setValidErrors] = useState(initialState.validErrors);
  const [isEmptyField, setIsEmptyField] = useState(initialState.isEmptyField);
  const [isProfileReady, setIsProfileReady] = useState(initialState.isProfileReady);

  const {
    name, surname, date, phone, site, about, stack, project,
  } = formValues;

  function handleBlur(event) {
    const { value, name } = event.target;

    setFormValues((prevValue) => ({ ...prevValue, [name]: value.trim() }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    let finalValue = value;

    if (name === 'phone') {
      finalValue = phoneMask(value);
    }

    if (validErrors[name]) {
      const isValidName = validationRules[name];

      setValidErrors((prevValue) => ({ ...prevValue, [name]: !isValidName }));
    }

    setFormValues((prevValue) => ({ ...prevValue, [name]: finalValue }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isExist = Object.values(formValues).every((value) => !!value.trim());

    if (!isExist) {
      setIsEmptyField(true);

      return;
    }

    const validErrorsObj = {};

    for (const key in formValues) {
      validErrorsObj[key] = !validationRules[key](formValues[key]);
    }

    setValidErrors(validErrorsObj);

    const isValidFields = Object.values(validErrorsObj).every((value) => !value);

    if (isExist && isValidFields) {
      setIsProfileReady(true);
    }
  }

  function handleClearForm() {
    setFormValues(initialState.formValues);
    setValidErrors(initialState.validErrors);
    setIsEmptyField(initialState.isEmptyField);
    setIsProfileReady(initialState.isProfileReady);
  }

  return (
    !isProfileReady
      ? (
        <Form
          name={name}
          surname={surname}
          date={date}
          phone={phone}
          site={site}
          about={about}
          stack={stack}
          project={project}
          isEmptyField={isEmptyField}
          validErrors={validErrors}
          onChange={handleChange}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
          onClick={handleClearForm}
        />
      )
      : (
        <Profile
          name={name}
          surname={surname}
          date={date}
          phone={phone}
          site={site}
          about={about}
          stack={stack}
          project={project}
        />
      )
  );
}

export default Questionnaire;
