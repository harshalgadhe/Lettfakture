import { BrowserRouter, Switch , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Terms from "./components/Terms";
import PriceList from "./components/dashboard/PriceList";
import './css/lettfaktura.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/terms" exact component={Terms} />
          <Route path="/dashboard/pricelist" exact component={PriceList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
