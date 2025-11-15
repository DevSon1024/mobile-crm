import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css';
import Dashboard from './pages/DashboardPage';
import Sales from './pages/Sales';
import Purchase from './pages/Purchase';
import Reports from './pages/Reports';

const Stock = () => <div><h1>Stock Page</h1><p>Manage Stock</p></div>;
const Suppliers = () => <div><h1>Suppliers Page</h1><p>Manage Suppliers</p></div>;

// const Reports = () => <div><h1>Reports Page</h1><p>Reports management</p></div>;
// const SalesReport = () => <div><h1>Sales Report</h1></div>;
// const InventoryReport = () => <div><h1>Inventory Report</h1></div>;

// const Service = () => <div><h1>Service Page</h1><p>Our services</p></div>;
// const Addon = () => <div><h1>Add-on Page</h1><p>Available add-ons</p></div>;

function App() {
  const[currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () =>{
    if (['sales','create-invoice','sales-history'].includes(currentPage)){
      return <Sales currentPage={currentPage}/>
    }
    if(['purchase','new-purchase','purchase-history'].includes(currentPage)){
      return <Purchase currentPage={currentPage}/>
    }
    if(['reports','sales-report','inventory-report'].includes(currentPage))
    {
      return <Reports currentPage={currentPage}/>
    }

    switch(currentPage){
      case 'dashboard': return <Dashboard />;
      // case 'purchase': return <Purchase />;
      // case 'new-purchase': return <NewPurchase />;
      // case 'purchase-history': return <PurchaseHistory />;
      case 'stock': return <Stock />;
      case 'accounts': return <Accounts />;
      case 'suppliers': return <Suppliers />;
      // case 'reports': return <Reports />;
      // case 'sales-report': return <SalesReport />;
      // case 'inventory-report': return <InventoryReport />;
      case 'settings': return <Settings />;
      // case 'service': return <Service />;
      // case 'addon': return <Addon />;
      default: return <Dashboard />;
    }
  }

  return (
    <div className='App'>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
