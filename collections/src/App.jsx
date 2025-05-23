import { useState } from 'react'
import Note from './components/Note'

const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(n => <Note key={n.id} content={n.content} />)}
      </ul>
    </div>
  )
}

export default App