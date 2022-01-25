import "./App.css";
import { TotalDeposit, Interest, ExpectedInterest } from "./components";

function App() {
  return (
    <div className="App">
      <TotalDeposit />
      <Interest />
      <ExpectedInterest />
    </div>
  );
}

export default App;
