import { useState } from "react";

import Header from "./components/Header";
import Statistics from "./components/Statistics";
import Button from "./components/Button";
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodOnclick = () => {
    setGood((prevNumber) => {
      return (prevNumber += 1);
    });
  };

  const neutralOnclick = () => {
    setNeutral((prevNumber) => {
      return (prevNumber += 1);
    });
  };

  const badOnClick = () => {
    setBad((prevNumber) => {
      return (prevNumber += 1);
    });
  };
  return (
    <div>
      <Header header="give feedback" />

      <Button text="good" onClickFunc={goodOnclick} />
      <Button text="neutral" onClickFunc={neutralOnclick} />
      <Button text="bad" onClickFunc={badOnClick} />
      <Header header="statistics" />
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
