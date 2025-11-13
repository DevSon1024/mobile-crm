import { useState } from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import './App.css'

const Dashboard = () => <div><h1>Dashboard Page</h1><p>Welcome to dashboard</p></div>;
const Sales = () => <div><h1>Sales Page</h1><p>View sales data</p></div>;
const Purchase = () => <div><h1>Purchase Page</h1><p>View Purchase data</p></div>;
const Stock = () => <div><h1>Stock Page</h1><p>Manage Stock</p></div>;
const Suppliers = () => <div><h1>Suppliers Page</h1><p>Manage Suppliers</p></div>;
const Customers = () => <div><h1>Customers Page</h1><p>Customer management</p></div>;
const Reports = () => <div><h1>Reports Page</h1><p>Reports management</p></div>;
const Service = () => <div><h1>Service Page</h1><p>Our services</p></div>;
const Addon = () => <div><h1>Add-on Page</h1><p>Available add-ons</p></div>;


function App() {
  const[currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () =>{
    switch(currentPage){
      case 'dashboard':return <Dashboard/>
      case 'sales':return <Sales/>
      case 'stock': return <Stock/>
      case 'purchase':return <Purchase/>
      case 'suppliers':return <Suppliers/>
      case 'customers':return <Customers/>
      case 'reports':return <Reports/>
      case 'service':return <Service/>
      case 'addon':return <Addon/>
      default: return <Dashboard/>
    }
  }

  return (
    <div className='App'>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className="app-container">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main className="main-content">
        {renderPage()}
      </main>
      </div>
    </div>
  )
}

export default App
