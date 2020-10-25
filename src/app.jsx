import React from "react";
import "./app.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
