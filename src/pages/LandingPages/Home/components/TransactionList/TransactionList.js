import React from "react";
import styles from "./TransactionList.module.css";

const TransactionList = () => {
  const transactions = [
    {
      date: "December 13, 2024",
      name: "New World Market",
      type: "Groceries",
      logo: "🛒",
      amount: "-$55.92",
    },
    {
      date: "December 11, 2024",
      name: "Unknown Vendor",
      type: "Shopping",
      logo: "🎁",
      amount: "-$90.99",
    },
    {
      date: "November 17, 2024",
      name: "Sail Away Soup",
      type: "Eating Out",
      logo: "🍜",
      amount: "-$24.90",
    },
  ];

  return (
    <div className={styles.transactionList}>
      {transactions.map((transaction, index) => (
        <div key={index} className={styles.transaction}>
          <div className={styles.date}>{transaction.date}</div>
          <div className={styles.details}>
            <div className={styles.logo}>{transaction.logo}</div>
            <div>
              <div className={styles.name}>{transaction.name}</div>
              <div className={styles.type}>{transaction.type}</div>
            </div>
          </div>
          <div className={styles.amount}>{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
