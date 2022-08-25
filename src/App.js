import React from "react";
import {Route, Routes} from "react-router-dom";
import Product from "./pages/Product";
import Customer from "./pages/Customer";



function App() {
  return (
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="/" element={<Customer />} />

      </Routes>
  );
}

export default App;
