import React, { useEffect, useState } from "react";
import axios from "axios";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  // LOAD ORDERS
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

  // DELETE SINGLE ORDER
  const deleteOrder = async (id) => {
    if (window.confirm("Delete this order?")) {
      try {
        await axios.delete(`http://localhost:8080/orders/${id}`);

        setOrders(orders.filter((order) => order.id !== id));

        alert("🗑 Order deleted successfully");
      } catch (err) {
        console.error("❌ Error deleting order:", err);
      }
    }
  };

  // DELETE ALL ORDERS
  const deleteAllOrders = async () => {
    if (window.confirm("⚠ Delete ALL orders?")) {
      try {
        await axios.delete("http://localhost:8080/orders");

        setOrders([]);

        alert("🗑 All orders deleted");
      } catch (err) {
        console.error("❌ Error deleting all orders:", err);
      }
    }
  };

  return (
    <div className="orders-container">
      {/* HEADER */}
      <div className="orders-header">
        <div>
          <h1>📦 Orders Management</h1>
          <p>Manage customer orders and deliveries</p>
        </div>

        {orders.length > 0 && (
          <button onClick={deleteAllOrders} className="delete-all-btn">
            Delete All
          </button>
        )}
      </div>

      {/* EMPTY STATE */}
      {orders.length === 0 ? (
        <div className="empty-orders">
          <i className="bi bi-bag-x"></i>
          <h2>No Orders Found</h2>
          <p>New customer orders will appear here.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Address</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>

                  <td>
                    <div className="customer-info">
                      <div className="customer-avatar">
                        {order.name?.charAt(0)}
                      </div>

                      <span>{order.name}</span>
                    </div>
                  </td>

                  <td>{order.email}</td>

                  <td className="address-cell">{order.address}</td>

                  <td>
                    <span className="payment-badge">{order.payment}</span>
                  </td>

                  <td>
                    <span className="status-badge">Processing</span>
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteOrder(order.id)}
                    >
                      <i className="bi bi-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
