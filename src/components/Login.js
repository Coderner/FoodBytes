import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = '*Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '*Invalid email address';
  }

  if(!values.password){
    errors.password = '*Required';
  } else if(values.password.length < 8){
    errors.password = "*Password length must be greater than or equal to 8"
  }

  return errors;
};

const Login = () => {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      navigate("/");
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='m-auto my-20 p-12 h-96 w-2/6 bg-red-50'>
    <h1 className='text-xl font-semibold text-red-600 my-4'>Login</h1>
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>

      <label htmlFor="email" className='my-1'>Email Address</label>
      <input
        className='py-1 my-1 rounded-md'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {(formik.touched.email && formik.errors.email) ? <div className='text-xs text-red-600'>{formik.errors.email}</div> : null}

      <label htmlFor="password" className='my-1'>Password</label>
      <input
        className='py-1 my-1 rounded-md'
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {(formik.touched.password && formik.errors.password) ? <div className='text-xs text-red-600'>{formik.errors.password}</div> : null}

      <button type="submit" className='my-6 py-1 justify-center bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md flex'>Submit</button>

      <p className='text-xs'>By clicking on Login, I accept the Terms & Conditions.</p>
    </form>
    </div>
  );
};

export default Login;