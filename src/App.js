import "./App.css";
import Navbar from "./containers/navbar/Navbar";
import ProductScreen from "./containers/products/ProductScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartScreen from "./containers/cart/CartScreen";
import HomePage from "./components/home/HomePage";
import Signup from "./components/auth/signup/Signup";
import Signin from "./components/auth/signin/Signin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductScreen />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
