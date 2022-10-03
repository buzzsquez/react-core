export const phoneMask = (value) => {
  const digit = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
  let finalValue = value;

  finalValue = !digit[2]
    ? digit[1]
    : digit[1] + '-' + digit[2] + (digit[3] ? '-' + digit[3] : '') + (digit[4] ? '-' + digit[4] : '');

  return finalValue;
};
