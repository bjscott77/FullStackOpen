import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>
const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>
const DisplayResults = ({type, count}) => <div>{type} {count}</div>

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const onGood = (newVal) => setGood(newVal)
    const onNeutral = (newVal) => setNeutral(newVal)
    const onBad = (newVal) => setBad(newVal)

    return (
        <div>
            <Header text={"give feedback"} />
            <Button name={"good"} handleClick={() => onGood(good+1)} />
            <Button name={"neutral"} handleClick={() => onNeutral(neutral+1)} />
            <Button name={"bad"} handleClick={() => onBad(bad+1)} />
            <Header text={"statistics"} />
            <DisplayResults type={"good"} count={good} />
            <DisplayResults type={"neutral"} count={neutral} />
            <DisplayResults type={"bad"} count={bad} />
        </div>
    )
}

export default App