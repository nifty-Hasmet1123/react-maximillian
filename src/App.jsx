import Header from "./components/Header/Header";
import UserInput from "./components/UserInput.jsx/UserInput";
import Result from "./components/Result/Result";
import { convertToCamelCase } from "./util/helper";
import { useState } from "react";

function App() {
  const [ investments, setInvestments ] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    const floatValue = parseFloat(value);

    setInvestments(prevInvestments => {
      return { ...prevInvestments, [convertToCamelCase(name)]: isNaN(floatValue) ? 0: floatValue }
    });
  }
  
  return (
    <>
      <Header />
      <UserInput 
        id="user-input"
        onChange={handleInputChange}
      />
      <Result investments={investments}/>
    </>
  );
}

export default App;
