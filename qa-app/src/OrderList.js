import React, { useState, useEffect } from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(`${API_URL}/api/Order`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div data-cy="order-body">
      <h2 data-cy="order-list-title">Order List</h2>
      <ul data-cy="order-list">
        {orders.map((order) => (
          <li key={order.id}>
            {order.productName} - {order.quantity} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
