import { Footer, Header, Introduction, Projects, Skills } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <span className="openingNames">{`html`}</span>
      <div className="block">
        <span className="openingNames">{`body`}</span>
        <div className="block">
          <Header />
          <Introduction />
          <Projects />
          <Skills />
          <Footer />
        </div>
        <span className="closingNames">{`body`}</span>
      </div>
      <span className="closingNames">{`html`}</span>
    </div>
  );
}

export default App;
