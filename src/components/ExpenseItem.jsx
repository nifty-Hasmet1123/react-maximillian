import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
// Note: components will always have 1 parameter only which is `props`
const ExpenseItem = (props) => {
    // destructuring or unpacking
    const { 
        expenseDate,
        expenseTitle,
        expenseAmount
     } = props;
    
    // don't transfer this to ExpenseDate. It is needed for .defaultProps
    const month =  expenseDate.toLocaleString("en-US", { month: "long" });
    const year = expenseDate.toLocaleString("en-US", { year: "numeric" });
    const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });

    return (
        <div className="expense-item">
            <div className="expense-date">
               <ExpenseDate month={ month } year={ year } day={ day } />
            </div>
            <div className="expense-item__description">
                <h2>{ expenseTitle }</h2>
                <div className="expense-item__price">${ expenseAmount }</div>
            </div>
        </div>
    );
}

// default values of props using .defaultProps
ExpenseItem.defaultProps = {
    expenseDate: new Date(2023, 9, 20),
    expenseTitle: "Car Insurance",
    expenseAmount: 1294.40
};


export default ExpenseItem;