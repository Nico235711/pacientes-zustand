import PacientList from './components/PacientList';
import PatientForm from './components/PatientForm';
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css"

const App = () => {

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-black text-center">Seguimiento de pacientes {""} 
        <span className="text-indigo-600">Veterinaria</span>
      </h1>

      <div className="md:flex mt-12">
        <PatientForm />
        <PacientList />
      </div>

      <ToastContainer />
    </div>
  )
}

export default App