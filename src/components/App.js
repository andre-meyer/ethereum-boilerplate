import React from "react";
import ChangeOwner from "./ChangeOwner";
import CurrentNumber from "./CurrentNumber";
import CurrentOwner from "./CurrentOwner";
import IncrementNumber from "./IncrementNumber";
import OnlyForOwner from "./OnlyForOwner";
import ResetNumber from "./ResetNumber";

const App = () => {
  return (
    <div>
      <h1>Workshop: Smart Contract Frontend</h1>
      <div>
        <CurrentNumber />
        <IncrementNumber />
        <CurrentOwner />
        <OnlyForOwner>
          <ChangeOwner />
          <ResetNumber />
        </OnlyForOwner>
      </div>
    </div>
  )
}

export default App;