import React from "react";
import styles from "./CardContent.module.css";

const CardContent = ({ content }) => {
  return (
    <ul>
      {content.map((text, index) => (
        <li className={styles.textIcon} key={index}>
          <span className={styles.cardText}>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default CardContent;
