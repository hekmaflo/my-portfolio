import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import More from "./components/More";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
      <More />
    </div>
  );
}

export default App;
