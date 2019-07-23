import React from "react";
import { GlobalStyle } from "./global/globalStyle";
import Home from "../src/pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
