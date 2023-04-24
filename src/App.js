import React from "react";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { Main, Users } from "./components";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users/:userId?/:edit?" component={Users} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
