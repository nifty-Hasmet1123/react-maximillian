import Header from "./components/Header/Header";
import UserInput from "./components/UserInput.jsx/UserInput";
import Result from "./components/Result/Result";
import { useState } from "react";

function App() {
  const [ investments, setInvestments ] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })
  
  return (
    <>
      <Header />
      <UserInput 
        id="user-input"
        setInvestments={setInvestments}
      />
      <Result investments={investments}/>
    </>
  );
}

export default App;
