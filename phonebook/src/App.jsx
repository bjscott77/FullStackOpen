import { useState } from 'react'
import AddPhoneRecord from './components/AddPhoneRecord'
import PhoneRecordDisplay from './components/PhoneRecordDisplay'
import PhoneRecordFilter from './components/PhoneRecordFilter'

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
      <PhoneRecordFilter search={search} handleSearchChange={handleSearchChange} />
      <h2>Add New Record</h2>
      <AddPhoneRecord 
            newName={newName} 
            newNumber={newNumber} 
            handleNameChange={handleNameChange} 
            handleNumberChange={handleNumberChange} 
            handleAddRecord={handleAddRecord}
      />
      <h2>Phone Records</h2>
      <PhoneRecordDisplay filteredPersons={filteredPersons} />
    </div>
  )
}

export default App