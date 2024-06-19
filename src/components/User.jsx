import React from "react";
import UserInfo from "./UserInfo";
import UserSummary from "./UserSummary";
import AddTransaction from "./AddTransaction";
import { useGetTransactions } from "./DbInteractions";

const User = () => {
  const { transactions } = useGetTransactions();

  return (
    <>
      <UserInfo />
      <div className="container">
        <UserSummary transactions={transactions} />
        <AddTransaction />

        <div className="transactions m-3 ">
          <h3>Your History</h3>
          <div className="sample">
            {transactions.map((transaction, id) => {
              return (
                <div
                  className="transaction m-2 d-flex justify-content-between"
                  key={id}
                >
                  <p>{transaction.name}</p>
                  <p>{transaction.amount}</p>
                  <p>{transaction.transactionType}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
