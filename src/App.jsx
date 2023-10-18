import "./css/App.css"

import expenses from "./assets/expenses";
import ExpenseItem from "./components/ExpenseItem";
import Main from "./components/Main";
import React from "react";

class App extends React.Component {
  // used a instance method inside this class
  // to iterate all the expense values
  allExpensesComponent = () => {
    return expenses.map((items, index) => {
      return <ExpenseItem
          key={ index }
          expenseTitle={ items?.title }
          expenseDate={ items?.date }
          expenseAmount={ items?.amount }
        />
    });
  };

  render() {
    return (
      <Main>
        <h2 className="text-color" >Let's Get started</h2>
        <div className="container">
          <div className="inner-container">
            { this.allExpensesComponent() }
          </div>
        </div>
      </Main>
    );
  };
}

export default App;
