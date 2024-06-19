import React, { useState } from "react";
import { useGetTransactions } from "./DbInteractions";

const UserSummary = (props) => {
  const transactions = props.transactions;
  console.log(transactions);
  let income = 0;
  let expense = 0;
  transactions.forEach((element) => {
    if (element.transactionType === "income") {
      income += parseInt(element.amount, 10);
    } else {
      expense += parseInt(element.amount, 10);
    }
  });
  console.log(income, expense);
  return (
    <>
      <div className="summary mt-10 container">
        <h3>Summary:</h3>
        <div className="balances d-flex align-items-center justify-content-evenly mx-2">
          <h4>Total Balance :{income - expense}rs</h4>
          <div className="calc">
            <h4>Total Expense :{expense}rs</h4>
            <h4>Total Income :{income}rs</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSummary;
