import { useState } from 'react'
import { Medication } from './components/medication/MedicationController'
import './App.css'

export default function App () {
  const [meds, setMeds] = useState([])
  const [docs, setDocs] = useState([])

  function addMedication () {
    const medication = {
      id: 1242,
      name: 'Gabapenting',
      dosage: '50mg',
      frequency: '3x daily',
      purpose: 'Nerve Pain',
      interactions: 'N/A',
      doctor: 'Dr. Fuentes'
    }
    setMeds([...meds, medication])
  }

  return (
    <div className='App'>
      <h1>
        Med Manager
        <span onClick={addMedication} id='add-med-btn'>
          ➕
        </span>
      </h1>
      {meds.length > 0 &&
      meds.map(med => (
        <Medication key={med.id} med={med} />
      ))}
    </div>
  )
}
