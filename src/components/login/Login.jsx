import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const Login = ({ history }) => {
  const [serverError, setServerError] = useState(null);
  const handleSubmit = async values => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://challenge-react.alkemy.org',
        data: {
          email: values.email,
          password: values.password,
        },
      });
      localStorage.setItem('token', response.data.token);
      history.replace('/');
    } catch (error) {
      setServerError('Invalid credentials');
    }
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({ errors, isValid, touched }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <Field
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              // autoComplete="off"
            />
            {errors.email && touched.email ? (
              <div className="text-danger">{errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <Field
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
            />
            {errors.password && touched.password ? (
              <div className="text-danger">{errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            Enviar
          </button>
          {serverError ? (
            <div className="text-danger">{serverError}</div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default Login;
