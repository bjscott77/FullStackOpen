import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-5555' }
  ]) 
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)  
  }

  const handleAddRecord = (name, number) => {
      event.preventDefault()
      if (name === "") {
            alert("Name cannot be empty")
            setNewName("")
      } else if (number === "") {
            alert("Number cannot be empty")
            setNewNumber("")
      } else if (persons.some(p => p.number === number)) {
            alert(`Number ${number} is already in use`)
            setNewNumber("")
      } else {
            setPersons(persons.concat({ name: name, number: number }))
            setNewName("")
            setNewNumber("")
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={() => handleAddRecord(newName, newNumber)}>
        <div>
          name: <input value={newName} placeholder={"Enter your name..."} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} placeholder={"Enter your number..."} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p => <div key={p.number}>{p.name} {p.number}</div>)}
      </div>
    </div>
  )
}

export default App