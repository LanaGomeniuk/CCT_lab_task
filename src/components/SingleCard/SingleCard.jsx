import React from "react";
import styles from "./SingleCard.module.css";

const SingleCard = (props) => {
  return (
    <div className={styles.singleCard}>
      <div className={styles.titleWrapper}>
        <p className={styles.cardNumber}>{props.card.id}</p>
        <h3 className={styles.cardTitle}>{props.card.title}</h3>
      </div>
      <span className={styles.bottomLine}></span>
    </div>
  );
};

export default SingleCard;
