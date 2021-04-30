import React, {useContext } from "react";
import { Header} from "./components/header/header";
import { Card } from "./components/card/card";
import { Filter } from "./components/filter/filter";
import { History } from "./components/history/history";
import {Footer} from './components/footer/footer'
import { AppProvider} from "./context/appConext";

function App() {
  //const { isHistory} = useContext(AppContext);
  
  return (
    <div>
      <AppProvider>
        <Header />
        <Filter />
        <Card /> 
        <History/>  
        <Footer/>
      </AppProvider>

    </div>
  );
}

export default App;
