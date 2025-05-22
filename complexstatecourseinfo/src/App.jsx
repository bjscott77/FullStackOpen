import { useState } from 'react'

const DisplaySingleParagraph = ({counter}) => <p>{counter}</p>
const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>

const App = () => {
    const [counter,setCounter]=useState(0)
    const btnNames = { increment: "Increment Counter", decrement: "Decrement Counter", reset: "Reset Counter"}
    const onCounterClick = () => setCounter(counter+1)
    const onDecrementClick = () => setCounter(counter-1)
    const onResetClick = () => setCounter(0)

    return (
        <div>
            <DisplaySingleParagraph counter={counter} />
            <Button handleClick={onCounterClick} name={btnNames.increment} />
            <Button handleClick={onDecrementClick} name={btnNames.decrement} />
            <Button handleClick={onResetClick} name={btnNames.reset} />
        </div>
    )
}

export default App