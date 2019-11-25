import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./containers";

export const Routes = () => (
  <Switch>
    <Route path="/">
      <Index />
    </Route>
  </Switch>
);
