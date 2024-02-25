import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
