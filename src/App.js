import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Billing from "./components/Billing";
import Bill2 from "./components/Bill2";
import Purchase from "./components/Purchase";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pay />} />
          <Route path="/bill" element={<Billing />} />
          <Route path="/bill2" element={<Bill2 />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
