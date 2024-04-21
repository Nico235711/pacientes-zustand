import { create } from "zustand";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidV4 } from 'uuid'

type PatientState = {
  patients: Patient[]
  activeId: Patient["id"]
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient["id"]) => void
  getPatientById: (id: Patient["id"]) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return {...patient, id: uuidV4()}
}

// Creando el Store de Zustand
// uso set para setear un/los valor/es
export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  activeId: "",
  addPatient: (data) => {
    const newPatient = createPatient(data)
    set((state) => ({
      patients: [...state.patients, newPatient]
    }))
  },
  deletePatient: (id) => {
    set((state) => ({
      patients: state.patients.filter(patient => 
        patient.id !== id
      )
    }))
  },
  getPatientById: (id) => {
    set(() => ({
      activeId: id
    }))
  }
}))