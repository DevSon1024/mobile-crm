import React, { useState } from "react";
import "../styles/Sales.css";

const Stock = ({ currentPage }) => {
  const renderView = () => {
    switch (currentPage) {
      case "internal-stock":
        return <InternalStock />;
      case "inventory-manager":
        return <InventoryManager />;
      case "acknowledge-of-stn":
        return <AcknowledgeOfSTN/>
      case "stock":
      default:
        return <StockView />;
    }
  };
  return (
    <div className="sales-container">
      <h1 className="page-title">Stock Management</h1>
      {renderView()}
    </div>
  );
};

const StockView = () => {
  return (
    <div className="sales-view">
      <h2>Stock Dashboard</h2>
    </div>
  );
};

const InternalStock = () => {
  return (
    <div className="sales-view">
      <h2>Internal Stock Page</h2>
    </div>
  );
};
const InventoryManager = () => {
  return (
    <div className="sales-view">
      <h2>Inventory Manager</h2>
    </div>
  );
};

const AcknowledgeOfSTN = () => {
  return (
    <div className="sales-view">
      <h2>Acknowledge Of STN</h2>
    </div>
  );
};

export default Stock;