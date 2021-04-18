import React, { useState } from "react";
import { Header } from "./components/header/header";
import { Card } from "./components/card/card";
import { Filter } from "./components/filter/filter";
import { AppProvider } from "./context/appConext";
import {listProducts} from './context/data.js'


function App() {
  const [listProducts] = useState(listProducts);

  return (
    <div>
      <AppProvider
        value={{
          listProducts
        }}
      >
        <Header />
        <Filter />
        <Card />
      </AppProvider>

    </div>
  );
}

export default App;
