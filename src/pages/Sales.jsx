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

  return (
    <div className="sales-history">
      <h2>Sales History</h2>
    </div>
  );
};

export default Sales;