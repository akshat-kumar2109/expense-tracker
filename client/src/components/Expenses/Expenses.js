import React, { useState } from "react";
import WrapperCard from "../UI/WrapperCard";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const deleteItemHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div>
      <WrapperCard className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList expenses={filteredExpense} onDelete={deleteItemHandler} />
      </WrapperCard>
    </div>
  );
}

export default Expenses;
