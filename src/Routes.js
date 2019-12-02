import React from "react";
import { Switch, Route } from "react-router-dom";
import TUIEditorPage from "./containers/TUIEditorPage";
import SummerNotePage from './containers/SummernotePage';
import CKEditorPage from './containers/CKEditorPage';

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <TUIEditorPage />
    </Route>
    <Route path="/summernote" exact>
      <SummerNotePage />
    </Route>
    <Route path="/ckeditor" exact>
      <CKEditorPage />
    </Route>
  </Switch>
);
