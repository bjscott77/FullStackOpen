import { useState } from 'react'

const DisplaySingleParagraph = ({text}) => <p>{text}</p>
const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>

const History = ({allClicks}) => {
    if (allClicks.length == 0) {
        return (<DisplaySingleParagraph text={"the app is used by pressing buttons"} />)
    }
    return (<DisplaySingleParagraph text = {"button press history: "+allClicks.join(' ')} />)
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const onLeftClick = (newVal) => {
    setAll(allClicks.concat('L'))
    setLeft(newVal)
    setTotal(newVal + right)
  }

  const onRightClick = (newVal) => {
    setAll(allClicks.concat('R'))
    setRight(newVal)
    setTotal(left + newVal)
  }

  return (
    <div>
      <br /><br />
      {left}&nbsp;
      <Button name={"Left"} handleClick={() => onLeftClick(left+1)} />
      <Button name={"Right"} handleClick={() => onRightClick(right+1)} />
      &nbsp;{right}

      <History allClicks={allClicks} />
    </div>
  )
}

export default App