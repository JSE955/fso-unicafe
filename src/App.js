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
      <Stat text='good' count={good} />
      <Stat text='neutral' count={neutral} />
      <Stat text='bad' count={bad} />
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
      <p>{props.text} {props.count}</p>
    </>
  )
}

export default App;
