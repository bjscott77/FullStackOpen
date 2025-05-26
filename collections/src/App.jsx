import { useState } from 'react'
import Note from './components/Note'
import Button from './components/Button'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState("a new note...")
    const [showAll, setShowAll] = useState(true)

    const addNote = (event) => {
        event.preventDefault()
        const noteObj = {
            content: newNote,
            important: Math.random() < 0.5,
            id: (notes.length+1).toString()
        }

        setNotes(notes.concat(noteObj))
        setNewNote('a new note...')
    }
    const onNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    const notesToShow = showAll ? notes : notes.filter(n => n.important === true)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>Show {showAll ? "Important" : "All"}</button>
            </div>
            <ul>
            {notesToShow.map(n => <Note key={n.id} content={n.content} />)}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={onNoteChange} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default App