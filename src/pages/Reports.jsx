// import React, { useState } from "react";
// import "../styles/Reports.css";
import "../styles/Sales.css";


const Reports = ({ currentPage }) => {
  const renderView = () => {
    switch (currentPage) {
      case "sales-report":
        return <SalesReport />;
      case "inventory-report":
        return <InventoryReport />;
      case "reports":
      default:
        return <ReportsView />;
    }
  };
  return (
    <div className="sales-container">
      <h1 className="page-title">Reports & Analytics</h1>
      {renderView()}
    </div>
  );
};

const ReportsView = () =>{
    return(
        <div className="sales-view">
            <h2>Reports Overview</h2>
        </div>
    );
};

const SalesReport = () =>{
    return(
        <h2>Sales Report</h2>
    );
}

const InventoryReport = () =>{
    return(
        <h2>Inventory Report</h2>
    );
};

export default Reports;