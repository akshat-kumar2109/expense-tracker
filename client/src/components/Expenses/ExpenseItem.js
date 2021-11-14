import React from "react";
import ExpenseDate from "./ExpenseDate";
import WrapperCard from "../UI/WrapperCard";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteItemHandler = (event) => {
    props.onDelete(props.expense.id);
  };

  return (
    <WrapperCard className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
        <div className="btns">
          <div className="expense-item__delete" onClick={deleteItemHandler}>
            <i className="fas fa-trash-alt"></i>
          </div>
          <div className="expense-item__edit">
            <i class="fas fa-edit"></i>
          </div>
        </div>
      </div>
    </WrapperCard>
  );
};

export default ExpenseItem;
