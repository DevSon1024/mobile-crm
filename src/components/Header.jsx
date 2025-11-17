import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="shop-info">
          <h1 className="shop-name">Mobile CRM</h1>
          <p className="shop-tagline">Sales & Inventory Management</p>
        </div>
      </div>

      <div className="header-right">
        <div className="header-icon-wrapper">
          <button className="icon-button">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        <div className="header-icon-wrapper">
          <button className="icon-button profile-button">
            <div className="profile-avatar">
              <span>DS</span>
            </div>
          </button>
        </div>
              <p className='username'>Devendra Sonawane</p>
      </div>
    </header>
  );
};

export default Header;