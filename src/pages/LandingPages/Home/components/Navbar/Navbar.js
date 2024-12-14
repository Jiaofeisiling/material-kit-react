import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>Expense Tracker</h1>
      <input type="text" placeholder="Search" className={styles.searchBar} />
      <div className={styles.icons}>
        <button>❓</button>
        <button>⚙️</button>
        <div className={styles.avatar}>A</div>
      </div>
    </div>
  );
};

export default Navbar;
