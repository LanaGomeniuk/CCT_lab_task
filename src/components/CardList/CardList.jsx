import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import styles from "./CardList.module.css";

const CardList = ({ cards, openCardId, onCardClick }) => {
  return (
    <div>
      <h1 className={styles.listTitle}>CCT Lab Process</h1>
      {cards.map((card) => (
        <SingleCard
          card={card}
          key={card.id}
          openCardId={openCardId}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default CardList;
