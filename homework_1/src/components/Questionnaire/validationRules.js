export const validationRules = {
  name: (value) => {
    const finalValue = value.trim();

    return finalValue && finalValue[0] === finalValue[0].toUpperCase();
  },
  surname: (value) => {
    const finalValue = value.trim();

    return finalValue && finalValue[0] === finalValue[0].toUpperCase();
  },
  date: () => true,
  phone: (value) => {
    return value && /\d-\d{4}-\d{2}-\d{2}/g.test(value);
  },
  site: (value) => {
    const finalValue = value.trim();

    return finalValue && finalValue.slice(0, 8) === 'https://';
  },
  about: (value) => {
    return value && value.length < 600;
  },
  stack: (value) => {
    return value && value.length < 600;
  },
  project: (value) => {
    return value && value.length < 600;
  },
};
