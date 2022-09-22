import React from 'react';
import { phoneMask } from '../../helpers';
import { validationRules } from './validationRules';
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
  formState: {
    isEmptyField: false,
  },
  isProfileReady: false,
};

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
    const { value, name } = event.target;
    const finalValue = value.trim();

    this.setState((state) => ({
      ...state,
      formValues: {
        ...state.formValues,
        [name]: finalValue,
      },
    }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    let finalValue = value;

    if (name === 'phone') {
      finalValue = phoneMask(value);
    }

    if (this.state.validErrors[name]) {
      const isValidName = validationRules[name];

      this.setState((state) => ({
        ...state,
        validErrors: {
          ...state.validErrors,
          [name]: !isValidName,
        },
      }));
    }

    this.setState((state) => ({
      ...state,
      formValues: {
        ...state.formValues,
        [name]: finalValue,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    const { formValues } = this.state;
    const isExist = Object.values(formValues).every((value) => !!value.trim());

    if (!isExist) {
      this.setState({
        formState: {
          isEmptyField: true,
        },
      });

      return;
    }

    const validErrorsObj = {};

    for (let key in formValues) {
      validErrorsObj[key] = !validationRules[key](formValues[key]);
    }

    this.setState((state) => ({
      ...state,
      validErrors: validErrorsObj,
    }));

    const isValidFields = Object.values(validErrorsObj).every((value) => !value);

    if (isExist && isValidFields) {
      this.setState((state) => ({
        ...state,
        isProfileReady: true,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        isProfileReady: false,
      }));
    }
  }

  handleClearForm() {
    this.setState(initialState);
  }

  render() {
    const { name, surname, date, phone, site, about, stack, project } = this.state.formValues;
    const { isEmptyField } = this.state.formState;
    const { validErrors } = this.state;

    return (
      <>
        {!this.state.isProfileReady && (
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
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onSubmit={this.handleSubmit}
            onClick={this.handleClearForm}
          />
        )}
        {this.state.isProfileReady && (
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
        )}
      </>
    );
  }
}

export default Questionnaire;
