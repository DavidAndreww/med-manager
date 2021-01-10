// * DetailsWrapperController
import DetailsWrapperView from './DetailsWrapperView'

// TODO houses state to govern buttons/inputsDisplay/medDetails
/*
state {
  currentDisplay: (medInputs/docInputs/details)
}
*/

// ? Functions 
/*
toggleInputFields = (fieldType) => fieldType === 'doc' || 'med'. updates state.isDisplayed
                             to change, rendering appropriate display 
                             view within DetailsWrapperView.
*/

export default function DetailsWrapperController () {
  return <DetailsWrapperView />
}