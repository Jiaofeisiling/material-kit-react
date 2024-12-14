import React from "react";
import styles from "./FunctionBar.module.css";

const FunctionBar = () => {
  return (
    <div className={styles.functionBar}>
      <input type="text" placeholder="Search" className={styles.searchBar} />
      <button className={styles.filterBtn}>Filter</button>
    </div>
  );
};

export default FunctionBar;
