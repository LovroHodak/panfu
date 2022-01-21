import "./App.css";

import Contacts from "./components/Contacts";
import Title from "./components/Title";
import About from "./components/About";
import Songs from "./components/Songs";
import Navv from "./components/Navv";

function App() {
  

  return (
    <div className="App">
      <Navv />
      <Title />
      <Contacts />
      <Songs />
      <About />
    </div>
  );
}

export default App;

