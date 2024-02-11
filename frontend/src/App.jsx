import { Switch , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Terms from "./components/Terms";
import PriceList from "./components/dashboard/PriceList";
import './css/lettfaktura.css';
import Home from "./components/Home";

function App() {
  return (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/dashboard/pricelist" exact component={PriceList} />
        </Switch>
  );
}

export default App;
