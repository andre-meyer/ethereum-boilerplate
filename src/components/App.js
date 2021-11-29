import React from "react";
import ChangeOwner from "./ChangeOwner";
import CurrentNumber from "./CurrentNumber";
import CurrentOwner from "./CurrentOwner";
import IncreaseNumber from "./IncreaseNumber";

const App = () => {
  return (
    <div>
      <h1>Workshop: Smart Contract Frontend</h1>
      <div>
        <CurrentNumber />
        <IncreaseNumber />
        <CurrentOwner />
        <ChangeOwner />
      </div>
    </div>
  )
}

export default App;