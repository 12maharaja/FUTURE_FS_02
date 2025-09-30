import React, { useEffect, useState } from "react";
import axios from "axios";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  // ✅ Load all orders
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8080/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("❌ Error fetching orders:", err);
    }
  };

  // ✅ Delete single order
  const deleteOrder = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await axios.delete(`http://localhost:8080/orders/${id}`);
        alert("🗑 Order deleted!");
        fetchOrders(); // refresh list
      } catch (err) {
        console.error("❌ Error deleting order:", err);
      }
    }
  };

  // ✅ Delete all orders
  const deleteAllOrders = async () => {
    if (window.confirm("⚠ This will delete ALL orders. Continue?")) {
      try {
        await axios.delete("http://localhost:8080/orders");
        alert("🗑 All orders deleted!");
        setOrders([]);
      } catch (err) {
        console.error("❌ Error deleting all orders:", err);
      }
    }
  };

  return (
    <div className="orders-page">
      <h1>📦 Orders Management</h1>
      <button onClick={deleteAllOrders} className="delete-all-btn">
        Delete All Orders
      </button>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.payment}</td>
                <td>
                  <button onClick={() => deleteOrder(order.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrdersPage;
