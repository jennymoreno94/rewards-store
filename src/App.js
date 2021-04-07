import { Header } from "./components/header/header";
import {Card} from "./components/card/card";
import {Filter} from "./components/filter/filter";
import { History} from "./components/history/history";
function App() {
  return (
    <div>
        <Header/>
        <Filter/>
        <History/>  
    </div>
  );
}

export default App;
