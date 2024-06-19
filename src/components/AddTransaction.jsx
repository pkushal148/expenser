import React, { useState } from "react";
import { addTransaction } from "./DbInteractions";

const AddTransaction = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    addTransaction({ name, amount, transactionType });
    setAmount("");
    setName("");
    setTransactionType("expense");
  };

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("expense");

  return (
    <>
      <div className="addExpense m-3 mt-5 mb-5">
        <h3>Add a transaction</h3>
        <form
          onSubmit={handleAdd}
          className="d-flex align-items-center justify-content-around"
        >
          <div className="ename">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              required
              type="text"
              className="form-control input-c"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter the expense"
            />
          </div>
          <div className="eamount">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control input-c"
              id="amount"
              value={amount}
              placeholder="Enter the amount"
              required
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <div className="eradio">
            <input
              type="radio"
              value="expense"
              name="expenses"
              id="expenseRadio"
              onChange={(e) => {
                setTransactionType(e.target.value);
              }}
            />
            <label htmlFor="expenseRadio" className="mx-3">
              Expense
            </label>
            <input
              type="radio"
              value="income"
              id="incomeRadio"
              name="expenses"
              onChange={(e) => {
                setTransactionType(e.target.value);
              }}
            />
            <label htmlFor="incomeRadio">Income</label>
          </div>
          <button type="submit" className="btn btn-dark" onClick={handleAdd}>
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
