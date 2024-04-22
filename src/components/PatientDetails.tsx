import PatientDetailItem from './PatientDetailItem';
import { Patient } from '../types';
import { usePatientStore } from '../store';

type PatientDetailsProps = {
  patient: Patient
}
const PatientDetails = ({ patient }: PatientDetailsProps) => {

  const { deletePatient, getPatientById } = usePatientStore()

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      <PatientDetailItem 
        label="ID"
        data={patient.id}
      />

      <PatientDetailItem 
        label="Nombre del Paciente"
        data={patient.name}
      />
      
      <PatientDetailItem 
        label="Nombre del Propietario"
        data={patient.caretaker}
      />
      
      <PatientDetailItem 
        label="Email"
        data={patient.email}
      />
      
      <PatientDetailItem 
        label="Fecha del Alta"
        data={patient.date.toString()}
      />
      <PatientDetailItem 
        label="Síntomas que Padece"
        data={patient.symptoms}
      />
    
      <div className="flex justify-between gap-3 mt-10">
        <button
          type="button"
          className="bg-indigo-600 text-white uppercase text-lg py-2 px-4 rounded-lg font-bold hover:bg-indigo-700 transition-all"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 text-white uppercase text-lg py-2 px-4 rounded-lg font-bold hover:bg-red-700 transition-all"
          onClick={() => deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default PatientDetails