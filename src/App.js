import { Header } from "./components/header/header";
import { Card } from "./components/card/card";
import { Filter } from "./components/filter/filter";
import { History } from "./components/history/history";
import { AppProvider } from "./context/appConext";

function App() {

  
  return (
    <div>
      <AppProvider>
        <Header />
        <Filter />
        <Card />
        <History />
      </AppProvider>

    </div>
  );
}

export default App;
