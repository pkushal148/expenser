import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import GetUserInfo from "./GetUserInfo";
import { db } from "../config/FirebaseConfig";
import { useState, useEffect } from "react";
import { onSnapshot, orderBy, query, where } from "firebase/firestore";

const addTransaction = async ({ name, amount, transactionType }) => {
  const { userInfo } = GetUserInfo();
  const transactionCollectionRef = collection(db, "transactions");
  await addDoc(transactionCollectionRef, {
    userId: userInfo.userId,
    name,
    amount,
    transactionType,
    createdAt: serverTimestamp(),
  });
};

const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const transactionCollectionRef = collection(db, "transactions");
  const { userInfo } = GetUserInfo();

  const getTransactions = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userId", "==", userInfo.userId),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({ ...data, id });
        });
        setTransactions(docs);
        console.log(transactions);
        // console.log(docs);
      });
    } catch (error) {
      console.error(error);
    }
    return () => unsubscribe;
  };

  useEffect(() => {
    getTransactions();
  }, []);
  return { transactions };
};

export { addTransaction, useGetTransactions };
