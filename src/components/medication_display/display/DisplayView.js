// * DisplayView component. Wraps DatePicker and MedicationList components

// TODO renders DoctorPickerController and MedicationListController components
import DoctorController from '../doctor_picker/DoctorPickerController'
import MedicationsController from '../medication_list/MedicationListController'

export default function MedicationDisplayView () {
  return (
    <div>
      <DoctorController />
      <MedicationsController />
    </div>
  )
}

