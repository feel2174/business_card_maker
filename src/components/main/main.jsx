import React, { useEffect, useState } from "react";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import styles from "./main.module.css";
import { useHistory } from "react-router-dom";
import Editor from "components/editor/editor";
import Preview from "components/preview/preview";

const Main = ({ FileInput, authService }) => {
  const history = new useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "velopert",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "public.velopert@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "zucca",
      company: "Hyundai",
      theme: "dark",
      title: "Frontend Engineer",
      email: "private@gmail.com",
      message: "come for it",
      fileName: "zucca",
      fileURL: null,
    },
    3: {
      id: 3,
      name: "dev",
      company: "LG",
      theme: "light",
      title: "Backend Engineer",
      email: "devzucca@gmail.com",
      message: "stay for it",
      fileName: "dev",
      fileURL: null,
    },
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Main;
