import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import PaymentMethod from "./pages/PaymentMethod";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/payment" element={<PaymentMethod />} />
        <Route exact path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
