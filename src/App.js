import "./App.css";
import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemDetailContainer />
      <hr />
      <ItemListContainer greting="Hola, mundo!" />
    </div>
  );
}

export default App;
