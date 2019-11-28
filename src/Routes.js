import React from "react";
import { Switch, Route } from "react-router-dom";
import TUIEditorPage from "./containers/TUIEditorPage";

export const Routes = () => (
  <Switch>
    <Route path="/">
      <TUIEditorPage />
    </Route>
  </Switch>
);
