import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>
const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>
const DisplayResults = ({type, count}) => <div>{type} {count}</div>
const Statistics = (props) => {
    if (props.total == 0) {
        return <div>No feedback given</div>
    }
    return <div>
        <DisplayResults type={"good"} count={props.good} />
        <DisplayResults type={"neutral"} count={props.neutral} />
        <DisplayResults type={"bad"} count={props.bad} /> 
        <DisplayResults type={"all"} count={props.total} />
        <DisplayResults type={"average"} count={props.runTotal/props.total} />
        <DisplayResults type={"positive"} count={(props.positive/props.total)*100+" %"} />
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
            <Statistics
                good={good}
                neutral={neutral} 
                bad={bad}
                positive={positive}
                total={total}
                runTotal={runTotal}
            />
        </div>
    )
}

export default App