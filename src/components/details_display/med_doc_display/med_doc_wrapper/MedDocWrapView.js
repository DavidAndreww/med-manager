// * MedDocWrapView Component

// TODO renders doc/med details or input fields depending on state
import MedController from '../med_details/MedDetailsContoller'
import DocController from '../doc_details/DocDetailsController'
import Inputs from '../inputs/InputsController'

export default function MedDocWrapView () {
  return (
    <div>
      <MedController />
      <DocController />
      <Inputs />
    </div>
  )
}