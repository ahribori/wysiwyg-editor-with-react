import React from "react";
import { Switch, Route } from "react-router-dom";
import TUIEditorPage from "./containers/TUIEditorPage";
import SummerNotePage from './containers/Summernote';

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <TUIEditorPage />
    </Route>
    <Route path="/summernote" exact>
      <SummerNotePage />
    </Route>
  </Switch>
);
