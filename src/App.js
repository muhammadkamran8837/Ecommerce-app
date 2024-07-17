import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import "./index.css";
import "./App.css";
import Cart from "./pages/cart/Cart";
import Shopping from "./pages/shop/Shopping";
import ShopContextProvider from "./context/ShopContext";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Shopping />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Cart />} />
          <Route path="" />
        </Routes>
      </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
