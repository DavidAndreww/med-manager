import { useState } from 'react'
import { MedicationView } from './MedicationView.js'

export const Medication = (props) => {
  return <MedicationView meds={props.med} />
}
