import React from "react";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";
import Main from "components/main/main";

const App = ({ authService }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "home"]}>
            <Login authService={authService} />
          </Route>

          <Route path="/main">
            <Main authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
