import React from "react";
import styles from "./editor.module.css";
import Card from "components/card/card";
import CardEditForm from "components/card_edit_form/card_edit_form";

const Editor = ({ card }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {card.map((card) => (
         <CardEditForm card={card} />
      ))}
    </section>
  );
};
export default Editor;
