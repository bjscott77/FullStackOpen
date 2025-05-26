import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")  
  const filteredPersons = persons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.number.includes(search)
  )

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)  
  }

  const handleSearchChange = (event) => {
      setSearch(event.target.value)
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
      <div>
        filter shown with: <input value={search} onChange={handleSearchChange} placeholder="Search by name or number..." />
      </div>
      <h2>add a new</h2>
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
        {filteredPersons.map(p => <div key={p.number}>{p.name} {p.number}</div>)}
      </div>
    </div>
  )
}

export default App