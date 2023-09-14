import React from 'react';
import { useState } from 'react';
import validate from './validation';
import styles from '../styles/Form.module.css';

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.loginContainer}>
      <form>
        <h1>Login</h1>
        <input
          className={!errors.email ? styles.inputs : styles.danger}
          type='text'
          name='email'
          placeholder='Email'
          value={userData.email}
          onChange={handleChange}
        />
        {/* {!errors.email ? null : <p className={styles.danger}>{errors.email}</p>} */}

        <input
          className={!errors.email ? styles.inputs : styles.danger}
          type='text'
          name='password'
          placeholder='Password'
          value={userData.password}
          onChange={handleChange}
        />
        {/* {!errors.password ? null : (
          <p className={styles.danger}>{errors.password}</p>
        )} */}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
