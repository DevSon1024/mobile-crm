import React, { useState } from "react";

const Purchase = ({ currentPage }) => {
  const renderView = () => {
    switch (currentPage) {
      case "new-purchase":
        return <NewPurchase />;
      case "purchase-history":
        return <PurchaseHistory />;
      case "purchase-bill":
        return <PurchaseBill/>
      case "purchase-return":
        return <PurchaseReturn/>
      case "purchase":
      default:
        return <PurchaseView />;
    }
  };
  return (
    <div className="sales-container">
      <h1 className="page-title">Purchase Management</h1>
      {renderView()}
    </div>
  );
};

const PurchaseView = () => {
  return (
    <div className="sales-view">
      <h2>Purchase Dashboard</h2>
    </div>
  );
};

const NewPurchase = () => {
  const [supplierName, setSupplierName] = useState("");
  const [amount, setAmount] = useState("");
  const [brand, setBrand] = useState("");
  const [gstNumber, setGSTNumber] = useState("");
  const [units, setUnits] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Purchased ${units} units of ${brand} brand from ${supplierName}`);
    setSupplierName("");
    setAmount("");
    setBrand(""); 
    setUnits("");
  };

  return (
    <div className="create-invoice">
      <h2>Make New Purchase</h2>
      <form onSubmit={handleSubmit} className="invoice-form">
        <div className="form-group">
          <label>Supplier Name:</label>
          <input
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            placeholder="Enter Supplier name"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Brand: </label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Enter Brand name"
            required
          />
        </div>
        <div className="form-group">
          <label>GST Number:</label>
          <input
            type="text"
            value={gstNumber}
            onChange={(e) => setGSTNumber(e.target.value)}
            placeholder="Enter GST Number"
            required
          />
        </div>
        <div className="form-group">
          <label>Units:</label>
          <input
            type="number"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            placeholder="Enter Units"
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

const PurchaseBill = () => {
  return (
    <div className="sales-view">
      <h2>Purchase Bill</h2>
    </div>
  );
};
const PurchaseReturn = () => {
  return (
    <div className="sales-view">
      <h2>Purchase Return</h2>
    </div>
  );
};

const PurchaseHistory = () => {
  return (
    <div className="sales-history">
      <h2>Purchase History</h2>
    </div>
  );
};

export default Purchase;