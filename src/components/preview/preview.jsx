import React from "react";
import styles from "./preview.module.css";
import Card from "components/card/card";

const Preview = ({ card }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
     <ul className={styles.cards}>
     {card.map(card => (
          <Card card={card}/>
      ))}
     </ul>
    </section>
  );
};
export default Preview;
