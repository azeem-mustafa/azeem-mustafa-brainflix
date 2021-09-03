import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Upload from "./components/Upload/Upload";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" render={props => <Upload {...props} />} />
          <Route path="/videos/:videoId" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
