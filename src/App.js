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
      <Statistics good={good} neutral={neutral} bad={bad} />
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

const StatisticLine = ({ text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={good + neutral + bad} />
          <StatisticLine text='average' value={((good * 1) + (neutral * 0) + (bad * -1)) / (good + bad + neutral)} />
          <StatisticLine text='positive' value={good / (good + bad + neutral)} />
        </tbody>
      </table>
    </>
  )
}

export default App;
