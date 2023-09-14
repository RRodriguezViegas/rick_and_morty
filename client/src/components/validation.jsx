const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{4,8}$/;

const validate = userData => {
  let errors = {};

  if (!regexEmail.test(userData.email)) {
    errors.email = 'Error email ;D';
  }
  if (!regexPassword.test(userData.password)) {
    errors.password = 'Error password';
  }

  return errors;
};

export default validate;
