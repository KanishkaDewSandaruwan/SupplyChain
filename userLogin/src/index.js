import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "assets/styles/style.css";

import Index from "views/Index";
import Farmer from "views/Farmer";
import Crop from "views/crop";
import Details from "views/Details";

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" exact component={Index} />
      <Route path="/farmer" exact component={Farmer} />
      <Route path="/farmer/details/:cut_id" exact component={Details} />
      <Route path="/farmer/new" exact component={Crop} />

      {/* <Redirect from="*" to="/" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
