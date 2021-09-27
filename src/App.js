import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GalleryPage from "./components/ImageListing";
import Header from "./components/Header";
import "./App.css";
import ImageDetails from "./components/ImageDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={GalleryPage} />
          <Route path="/product/:imageId" component={ImageDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
