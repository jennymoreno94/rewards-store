import { Header } from "./components/header/header";
import { Card } from "./components/card/card";
import { Filter } from "./components/filter/filter";
import { AppProvider } from "./context/appConext";
function App() {
  return (
    <div>
      <AppProvider>
        <Header />
        <Filter />
        <Card />
      </AppProvider>

    </div>
  );
}

export default App;
