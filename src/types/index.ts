export type Patient = {
  id: string
  name: string
  caretaker: string
  email: string
  date: Date
  symptoms: string
}

// con omit puedo indicar que columna es la que no quiero traerme
export type DraftPatient = Omit<Patient, "id">