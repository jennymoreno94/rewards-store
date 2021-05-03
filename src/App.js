import React from "react";
import { Header } from "./components/header/header";
import { Card } from "./components/card/card";
import { Filter } from "./components/filter/filter";
import { History } from "./components/history/history";
import { Footer } from './components/footer/footer'
import { AppProvider } from "./context/appConext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <AppProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/rewards-store" >
              <Filter />
              <Card />
            </Route>
            <Route path="/history" component={History} />
          </Switch>
        </Router>
        <Footer />
      </AppProvider>

    </div>
  );
}

export default App;
