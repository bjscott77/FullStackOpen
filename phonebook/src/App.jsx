import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState("Enter a new record...")

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleAddName = (name) => {
      event.preventDefault()
      setPersons(persons.concat({ name: name }))
      setNewName("Enter a new record...")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={() => handleAddName(newName)}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p => <div key={p.name}>{p.name}</div>)}
      </div>
    </div>
  )
}

export default App