import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";
import Index from "./pages/Index.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
