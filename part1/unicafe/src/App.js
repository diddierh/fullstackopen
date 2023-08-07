import { useState } from "react"

const StatisticsLine = (props) => {
  return(
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
    
  )
}

const Button = (props) => { 
  return(
    <button onClick={props.handler}>props.text</button>
  )
}

const Header = () => {
  return(
    <h1>Give feedback</h1>
  )
}

const Stats = (props) =>{
  const sum = props.bad + props.neutral + props.good
  const avg = (props.good-props.bad)/sum
  const pos = props.good * 100 / sum
  if(sum === 0){
    return(
      <>
        <h2>statistics</h2>
        <div>No feedback given.</div>
      </>
    )
  }
  return(
    <>
      <h2>statistics</h2>
      <table> 
        <StatisticsLine text="good" value={props.good}></StatisticsLine>
        <StatisticsLine text="neutral" value={props.neutral}></StatisticsLine>
        <StatisticsLine text="bad" value={props.bad}></StatisticsLine>
        <StatisticsLine text="all" value={sum}></StatisticsLine>
        <StatisticsLine text="average" value={avg}></StatisticsLine>
        <StatisticsLine text="positive" value={pos+" %"}></StatisticsLine>
      </table>
    </>
  )
}

const clickHandlerFactory = (attr, setter) =>{
  const clickHandler = () =>{
    setter(attr + 1)
  }
  return clickHandler
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <>
      <Header></Header>
      <Button handler={clickHandlerFactory(good, setGood)} text="good"></Button>
      <Button handler={clickHandlerFactory(neutral, setNeutral)} text="neutral"></Button>
      <Button handler={clickHandlerFactory(bad, setBad)} text="bad"></Button>
      <Stats good={good} neutral={neutral} bad={bad}></Stats>
    </>
  )
}

export default App;
