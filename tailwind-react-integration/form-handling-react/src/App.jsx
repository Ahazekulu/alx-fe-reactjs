import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div>
      <h1>Form Handling Demo</h1>
      <h2>Controlled Components</h2>
      <RegistrationForm />
      <h2>Formik</h2>
      <FormikForm />
    </div>
  );
}

export default App;
