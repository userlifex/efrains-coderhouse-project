import "./App.css";
import { Counter, ItemListContainer, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greting="Hola, mundo!" />
    </div>
  );
}

export default App;
