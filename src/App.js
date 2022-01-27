import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";

import { SocialProvider } from "./hooks/use-social";

import Home from "./pages/Home";
import Music from "./pages/Music";
import Gallery from "./pages/Gallery";

import Navv from "./components/Navv";

function App() {
  return (
    <SocialProvider>
      <div className="App">
        <Navv />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/music"
            render={() => {
              return <Music />;
            }}
          />
          <Route
            exact
            path="/gallery"
            render={() => {
              return <Gallery />;
            }}
          />
        </Switch>
      </div>
    </SocialProvider>
  );
}

export default withRouter(App);
