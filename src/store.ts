import { create } from "zustand";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidV4 } from 'uuid'

type PatientState = {
  patients: Patient[]
  addPatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return {...patient, id: uuidV4()}
}

// Creando el Store de Zustand
// uso set para setear un/los valor/es
export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  addPatient: (data) => {
    const newPatient = createPatient(data)
    set((state) => ({
      patients: [...state.patients, newPatient]
    }))
  }
}))