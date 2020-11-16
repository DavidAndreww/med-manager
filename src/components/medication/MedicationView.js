export const MedicationView = (props) => {
  return (
    <div>
      <h4>{props.meds.name}</h4>
      <div>
        <section>
          <ul>
            <li>Dosage: {props.meds.dosage}</li>
            <li>Frequency: {props.meds.frequency}</li>
            <li>Used to treat: {props.meds.purpose}</li>
            <li>Interactions: {props.meds.interactions}</li>
            <li>Prescribed by: {props.meds.doctor}</li>
          </ul>
          <div>
            <p>This will be the details view when 'Instructions button is clicked'</p>
          </div>
        </section>
        <section>
          <button>Instructions</button>
          <button>Update</button>
          <button>Remove</button>
        </section>
      </div>
    </div>
  )
}
