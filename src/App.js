import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div className="App">
      <h1>React-Redux(App.js)</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <HomePage />
        <AboutPage />
      </div>
    </div>
  );
}

export default App;
