const AddPhoneRecord = (props) => {
    return <div>
          <form onSubmit={() => handleAddRecord(props.newName, props.newNumber)}>
            <div>
              name: <input value={props.newName} placeholder={"Enter your name..."} onChange={props.handleNameChange} />
            </div>
            <div>
              number: <input value={props.newNumber} placeholder={"Enter your number..."} onChange={props.handleNumberChange} />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
      </div>
}

export default AddPhoneRecord