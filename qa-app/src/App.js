import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProductList from "./ProductList";
import OrderList from "./OrderList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link data-cy="login-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link data-cy="dashboard-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link data-cy="products-link" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link data-cy="orders-link" to="/orders">
                Orders
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/orders" element={<OrderList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
