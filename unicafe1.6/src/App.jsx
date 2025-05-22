import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>
const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>
const DisplayResults = ({type, count}) => <div>{type} {count}</div>
const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
const DisplayText = ({text}) => <p>{text}</p>
const Statistics = (props) => {
    if (props.total == 0) {
        return <DisplayText text={"No feedback given"} />
    }
    return <table>
        <tbody>
            <StatisticLine text={"good"} value={props.good} />
            <StatisticLine text={"neutral"} value={props.neutral} />
            <StatisticLine text={"bad"} value={props.bad} />
            <StatisticLine text={"all"} value={props.total} />
            <StatisticLine text={"average"} value={props.runTotal/props.total} />
            <StatisticLine text={"positive"} value={(props.positive/props.total)*100+" %"} />
        </tbody>
    </table>
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