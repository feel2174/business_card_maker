import React, { useEffect, useState } from "react";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import styles from "./main.module.css";
import { useHistory } from "react-router-dom";
import Editor from "components/editor/editor";
import Preview from "components/preview/preview";
const Main = ({ authService }) => {
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
  
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'velopert',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'public.velopert@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    },
    {
      id: 2,
      name: 'zucca',
      company: 'Hyundai',
      theme: 'dark',
      title: 'Frontend Engineer',
      email: 'private@gmail.com',
      message: 'come for it',
      fileName: 'zucca',
      fileURL: null
    },
    {
      id: 3,
      name: 'dev',
      company: 'LG',
      theme: 'light',
      title: 'Backend Engineer',
      email: 'devzucca@gmail.com',
      message: 'stay for it',
      fileName: 'dev',
      fileURL: null
    },
  ])

 
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor card={cards}/>
        <Preview card={cards}/>
      </div>
      <Footer />
    </section>
  );
};
export default Main;
