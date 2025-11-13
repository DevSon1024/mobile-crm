import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'

const Dashboard = () => <div><h1>Dashboard Page</h1><p>Welcome to dashboard</p></div>;

const Sales = () => <div><h1>Sales Page</h1><p>View sales data</p></div>;
const CreateInvoice = () => <div><h1>Create Invoice</h1></div>;
const SalesHistory = () => <div><h1>Sales History</h1></div>;

const Purchase = () => <div><h1>Purchase Page</h1><p>View Purchase data</p></div>;
const NewPurchase = () => <div><h1>New Purchase</h1></div>;
const PurchaseHistory = () => <div><h1>Purchase History</h1></div>;

const Stock = () => <div><h1>Stock Page</h1><p>Manage Stock</p></div>;
const Suppliers = () => <div><h1>Suppliers Page</h1><p>Manage Suppliers</p></div>;

const Reports = () => <div><h1>Reports Page</h1><p>Reports management</p></div>;
const SalesReport = () => <div><h1>Sales Report</h1></div>;
const InventoryReport = () => <div><h1>Inventory Report</h1></div>;

const Service = () => <div><h1>Service Page</h1><p>Our services</p></div>;
const Addon = () => <div><h1>Add-on Page</h1><p>Available add-ons</p></div>;

function App() {
  const[currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () =>{
    switch(currentPage){
      case 'dashboard': return <Dashboard />;
      case 'sales': return <Sales />;
      case 'create-invoice': return <CreateInvoice />;
      case 'sales-history': return <SalesHistory />;
      case 'purchase': return <Purchase />;
      case 'new-purchase': return <NewPurchase />;
      case 'purchase-history': return <PurchaseHistory />;
      case 'stock': return <Stock />;
      case 'suppliers': return <Suppliers />;
      case 'reports': return <Reports />;
      case 'sales-report': return <SalesReport />;
      case 'inventory-report': return <InventoryReport />;
      case 'service': return <Service />;
      case 'addon': return <Addon />;
      default: return <Dashboard />;
    }
  }

  return (
    <div className='App'>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className="app-container">
      <main className="main-content">
        {renderPage()}
      </main>
      </div>
    </div>
  )
}

export default App;
