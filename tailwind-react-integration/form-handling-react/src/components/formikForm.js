import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Mock API call
    console.log('Form submitted:', values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field name="username" type="text" placeholder="Username" />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
