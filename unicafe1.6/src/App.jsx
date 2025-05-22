import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>
const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>
const DisplayResults = ({type, count}) => <div>{type} {count}</div>
const Statistics = ({fValue, totalCount, positive}) => {
    return <div>
        <DisplayResults type={"all"} count={totalCount} />
        <DisplayResults type={"average"} count={fValue/totalCount} />
        <DisplayResults type={"positive"} count={(positive/totalCount)*100+" %"} />
    </div>
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [positive, setPositive] = useState(0)
    const [total, setTotal] = useState(0)
    const [runTotal, setRunTotal] = useState(0)

    const onGood = (newVal) => {
        setTotal(total+1)
        setPositive(positive+1)
        setRunTotal(runTotal+1)
        setGood(newVal)
    }

    const onNeutral = (newVal) => {
        setTotal(total+1)
        setNeutral(newVal)
    }
    
    const onBad = (newVal) => {
        setTotal(total+1)
        setRunTotal(runTotal-1)
        setBad(newVal)
    }

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
            <Statistics fValue={runTotal} totalCount={total} positive={good} />
        </div>
    )
}

export default App