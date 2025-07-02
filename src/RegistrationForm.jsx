import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; // Import custom CSS

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      mobile: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Must be a 10-digit number')
        .required('Mobile number is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Data:', values);
      alert('Registration successful!');
    },
  });

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>Full Name</label>
        <input
          name="fullName"
          type="text"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="error">{formik.errors.fullName}</div>
        )}

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}

        <label>Mobile Number</label>
        <input
          name="mobile"
          type="tel"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.mobile && formik.errors.mobile && (
          <div className="error">{formik.errors.mobile}</div>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
