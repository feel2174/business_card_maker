import React, { useEffect, useState } from "react";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import styles from "./main.module.css";
import { useHistory } from "react-router-dom";
import Editor from "components/editor/editor";
import Preview from "components/preview/preview";

const Main = ({ FileInput, authService, cardRepository }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = new useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if(!userId) {
      return;
    } 
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    })
    return () => stopSync();
    
  }, [userId, cardRepository])

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

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
