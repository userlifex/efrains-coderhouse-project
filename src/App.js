import "./App.css";
import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { Cart } from "./components/Cart/Cart";
import { UserForm } from "./components/UserForm";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <UserProvider>
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
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>Route not found ⛔️</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </UserProvider>
    </div>
  );
}

export default App;
