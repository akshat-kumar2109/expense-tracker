import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  const deleteItemHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          expense={expense}
          onDelete={deleteItemHandler}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
