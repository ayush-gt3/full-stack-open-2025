import { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {
  const Total = good+bad+neutral
  return (
    <div>
      <p> good {good}</p>
      <p> neutral {neutral}</p>
      <p> bad {bad} </p>
      <p> all {Total} </p>
      <p> average {(1*good+0*neutral-1*bad)/Total} </p>
      <p> Positive {(good*100)/Total}  % </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <h1> give feedback </h1>
      <button onClick={() => setGood(good+1)}> 
        good
      </button>
      <button onClick={() => setNeutral(neutral+1)}> 
        neutral
      </button>
      <button onClick={() => setBad(bad+1)}> 
        bad
      </button>

      <h1> statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
  )
}

export default App