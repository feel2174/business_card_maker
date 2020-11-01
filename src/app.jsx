import React from "react";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";
import Main from "components/main/main";

const App = ({ FileInput, authService, cardRepository }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "home"]}>
            <Login authService={authService} />
          </Route>

          <Route path="/main">
            <Main FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
