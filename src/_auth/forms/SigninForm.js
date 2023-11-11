import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Username must be at least 5 characters")
      .required("Required"),
    name: Yup.string()
      .min(5, "Username must be at least 5 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /(?=.*[!@#$%^&*(),.?":{}|<>])/,
        "Password must contain at least one special character"
      )
      .required("Required"),
    name: Yup.string().required("Required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    name: "",
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // You can perform your signup logic here
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
