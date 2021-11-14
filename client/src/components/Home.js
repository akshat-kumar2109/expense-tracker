import React, { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import Button from "./UI/Button";
import "./Home.css";
import axios from "axios";
import { useHistory } from "react-router";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function InitialPage() {
  let history = useHistory();
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteItemHandler = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Work to do
  const logoutHandler = () => {
    axios
      .post("https://akshat-expense-tracker.herokuapp.com/users/logout")
      .then(() => {
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onDelete={deleteItemHandler} />
      <div className="btn">
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </div>
  );
}

export default InitialPage;
