import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>
const Paragraph = ({text}) => <p>{text}</p>
const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>
const DisplayAnecdote = ({anecdote, vote, ...props}) => {
    return <div>
        <Header text={"Anecdote of the Day"} />
        <Paragraph text={anecdote} />
        <Paragraph text={"has "+vote+" votes"} />
        <Button name={"Vote"} handleClick={props.handleOnVote} />         
        <Button name={"Next Anecdote"} handleClick={props.handleNextAnecdote} />
        <Header text={"Anecdote with most Votes"} />
        <Paragraph text={props.topAnecdote} />
        <Paragraph text={"has "+props.topVote+" votes"} />
    </div>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [top, setTop] = useState(0)

  const onNextAnecdote = () => {
      setSelected(Math.floor(Math.random() * anecdotes.length))
      setTop(getTopIndex())
  }
  const onVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)       
  }  
  const getTopIndex = () => {
    let max = 0
    let idx = 0
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] > max) {
            max = votes[i]
            idx = i
        }
    }
    return idx
  }

  return (
    <div>
        <DisplayAnecdote 
            anecdote={anecdotes[selected]}
            vote = {votes[selected]}
            handleNextAnecdote={onNextAnecdote}
            handleOnVote={onVote}
            topAnecdote={anecdotes[top]}
            topVote={votes[top]}
        />
    </div>
  )
}

export default App