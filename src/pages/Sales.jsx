import React, { useState } from "react";
import "../styles/Sales.css";

const Sales = ({ currentPage }) => {
  const renderView = () => {
    switch (currentPage) {
      case "create-invoice":
        return <CreateInvoice />;
      case "sales-history":
        return <SalesHistory />;
      case "sales":
      default:
        return <SalesView />;
    }
  };
  return (
    <div className="sales-container">
      <h1 className="page-title">Sales Management</h1>
      {renderView()}
    </div>
  );
};

const SalesView = () => {
  return (
    <div className="sales-view">
      <h2>Sales Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-grid">
          <h3>Total Sales</h3>
          <p className="stat-value">₹1,24,500</p>
        </div>
        <div className="stat-grid">
          <h3>This Month</h3>
          <p className="stat-value">₹45,200</p>
        </div>
        <div className="stat-grid">
          <h3>invoices</h3>
          <p className="stat-value">127</p>
        </div>
        <div className="stat-grid">
          <h3>Pending</h3>
          <p className="stat-value">₹12,3000</p>
        </div>
      </div>
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <p>
          View recent Sales, create invoices, or check sales history from the
          menu above.
        </p>
      </div>
    </div>
  );
};

const CreateInvoice = () => {
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Invoice creted fro ${customerName} - ₹${amount}`);
    setCustomerName("");
    setAmount("");
  };

  return (
    <div className="create-invoice">
      <h2>Create New Invoice</h2>
      <form onSubmit={handleSubmit} className="invoice-form">
        <div className="form-group">
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create Invoice
        </button>
      </form>
    </div>
  );
};
const SalesHistory = () => {
  const salesData = [
    { id: 1, date: '2025-11-10', customer: 'John Doe', amount: 5000 },
    { id: 2, date: '2025-11-09', customer: 'Jane Smith', amount: 7500 },
    { id: 3, date: '2025-11-08', customer: 'Mike Johnson', amount: 3200 },
  ];

  return (
    <div className="sales-history">
      <h2>Sales History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>#{sale.id}</td>
              <td>{sale.date}</td>
              <td>{sale.customer}</td>
              <td>₹{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;