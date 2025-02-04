import investmentCalculator from "../../assets/investment-calculator-logo.png";


function Header() {
  return (
    <header id="header">
      <img src={investmentCalculator} alt="money-bag" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}

export default Header;