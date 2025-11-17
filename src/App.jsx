import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';
import Dashboard from './pages/DashboardPage';
import Sales from './pages/Sales';
import Purchase from './pages/Purchase';
import Reports from './pages/Reports';
import Stock from './pages/Stock';

const Suppliers = () => <div><h1>Suppliers Page</h1><p>Manage Suppliers</p></div>;
const Service = () => <div><h2>Sevices</h2></div>;
const Addon = () => <div><h2>Addon</h2></div>;

function App() {
  const[currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () =>{
    if (['sales','quotation','sales-return','create-invoice','sales-history'].includes(currentPage)){
      return <Sales currentPage={currentPage}/>
    }
    if(['purchase','new-purchase','purchase-history','purchase-bill','purchase-return'].includes(currentPage)){
      return <Purchase currentPage={currentPage}/>
    }
    if(['reports','sales-report','inventory-report'].includes(currentPage))
    {
      return <Reports currentPage={currentPage}/>
    }
    if(['stock','internal-stock','inventory-manager','acknowledge-of-stn'].includes(currentPage))
    {
      return <Stock currentPage={currentPage}/>
    }

    switch(currentPage){
      case 'dashboard': return <Dashboard />;
      case 'suppliers': return <Suppliers />;
      case 'service': return <Service />;
      case 'addon': return <Addon />;
      default: return <Dashboard />;
    }
  }

  return (
    <div className='App'>
      <Header/>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
