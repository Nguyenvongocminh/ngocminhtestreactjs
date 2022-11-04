import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../screens/home/home";
import About from "../screens/about/about";
import Contact from "../screens/contact/contact";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
