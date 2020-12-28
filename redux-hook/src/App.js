import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route exact={true} path="/" component={LandingPage} />
       </Switch>
     </BrowserRouter>
  );
}

export default App;
