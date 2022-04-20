import "./App.css";
import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="*" element={<h1>Route not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
