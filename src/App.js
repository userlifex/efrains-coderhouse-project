import { createContext, useState } from "react";
import "./App.css";
import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

//export const Context = createContext();

function App() {
  //const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="*" element={<h1>Route not found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
