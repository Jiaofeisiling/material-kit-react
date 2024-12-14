import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span>© 2024 Expense Tracker</span>
      <div>
        <a href="#abouts">Abouts</a> | <a href="#faqs">FAQs</a>
      </div>
    </div>
  );
};

export default Footer;
