import { useState } from "react";


function App() {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  
  return (
    <>
      <Heading text='give feedback' />

      <Button text='good' onClick={handleGoodClick} />
      <Button text='neutral' onClick={handleNeutralClick} />
      <Button text='bad' onClick={handleBadClick} />

      <Heading text='statistics' />
      <Stat text='good' value={good} />
      <Stat text='neutral' value={neutral} />
      <Stat text='bad' value={bad} />
      <Stat text='all' value={good + neutral + bad} />
      <Stat text='average' value={((good * 1) + (neutral * 0) + (bad * -1)) / (good + bad + neutral)} />
      <Stat text='positive' value={good / (good + bad + neutral)} />
    </>
  );
}

const Heading = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Stat = (props) => {
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

export default App;
