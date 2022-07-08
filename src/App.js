import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import PaymentMethod from "./Pages/PaymentMethod";
import SuccessPage from "./Pages/SuccessPage";

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
