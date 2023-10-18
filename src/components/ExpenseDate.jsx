import React from "react";
import "./css/ExpenseDate.css";

const ExpenseDate = ({ month, year, day }) => {
    return (
        <React.Fragment>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </React.Fragment>
    );
}

export default ExpenseDate;