// * Root level App Component

// import medicationDisplayComponent
import MedicationsDisplay from './components/medication_display/display/DisplayController'
// import DetailsDisplayComponent
import DetailsDisplay from './components/details_display/details_wrapper/DetailsWrapperController'

// TODO holds state for selected medication to be displayed in details component (redux?)


export function App () {
  return (
    <div>
      <MedicationsDisplay />
      <DetailsDisplay />
    </div>
  )
}