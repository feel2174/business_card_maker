import React from "react";
import styles from './header.module.css'


const Header = (props) => {
  return (
    <div className={styles.header}>
      <img className={styles.img} src={process.env.PUBLIC_URL + 'images/logo.png'} width="50"height="40" alt="cardImage"/>
      <h1>Business Card Maker</h1>
    </div>
  );
};

export default Header;
