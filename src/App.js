import React from "react";
import { GlobalStyle } from "./global/globalStyle";
import Home from "../src/pages/Home";
import Success from "../src/pages/Success";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Canceled from "./pages/Canceled";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/success" component={Success} />
          <Route path="/canceled" component={Canceled} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
