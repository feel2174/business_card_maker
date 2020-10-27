import React, { useEffect } from "react";
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};
export default Main;
