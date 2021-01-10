// * DetailsWrapperView Component

// TODO renders ButtonsComponent
import Buttons from '../add_buttons/ButtonsController'

// TODO renders display/inputs component
import MedDocDisplay from '../med_doc_display/med_doc_wrapper/MedDocWrapController'

// TODO renders interactions component
import Interactions from '../interactions_display/InteractionsController'

export default function DetailsWrapperView () {
  return (
    <div>
      <Buttons />
      <MedDocDisplay />
      <Interactions />
    </div>
  )
}

