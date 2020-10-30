import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "components/card_edit_form/card_edit_form";
import AddForm from "components/add_form/add_form";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <AddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
