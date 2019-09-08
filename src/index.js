import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
//import CategoryPage from "./components/pages/CategoryPage";
//import SelectedProductList from "./components/SelectedProductList";
import "./styles.css";
import Header from "./components/header/Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
