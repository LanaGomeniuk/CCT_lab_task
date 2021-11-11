import React from "react";
import CardContent from "../CardContent/CardContent";
import styles from "./SingleCard.module.css";

const SingleCard = ({ card, openCardId, onCardClick }) => {
  const lineStyle =
    openCardId === card.id ? styles.underline2 : styles.underline;
  const setCardState = () => {
    if (openCardId === card.id) {
      onCardClick(null);
    } else {
      onCardClick(card.id);
    }
  };
  return (
    <div onClick={setCardState} >
      <div className={styles.singleCard}>
        <div className={styles.titleWrapper}>
          <p className={styles.cardNumber}>{card.id}</p>
          <h3 className={styles.cardTitle}>{card.title}</h3>
        </div>
        <span className={lineStyle}></span>
      </div>
      {openCardId === card.id && <CardContent content={card.content} />}
    </div>
  );
};

export default SingleCard;
