import { Header } from "./components/header/header";
import { Card } from "./components/card/card";
import { Filter } from "./components/filter/filter";
import { AppProvider } from "./context/appConext";
import {products} from './context/data.js'

function App() {
  const [productsData] = useState(products);

  return (
    <div>
      <AppProvider
        value={{
          productsData
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
