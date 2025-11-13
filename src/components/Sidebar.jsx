import React from "react";
import "./Sidebar.css";


const menuItems = [
    {id:'dashboard', label: 'Dashboard'},
    {id:'sales', label: 'Sales'},
    {id:'purchase', label: 'Purchase'},
    {id:'stock', label: 'Stock'},
    {id:'suppliers', label: 'Suppliers'},
    {id:'customers', label: 'Customers'},
    {id:'reports', label: 'Reports'},
]

const Sidebar = ({currentPage, setCurrentPage}) =>{
    return(
    <aside className="sidebar">
        <nav className="sidebar-nav">
            {menuItems.map((item)=>(
                <button 
                key= {item.id}
                onClick={()=> setCurrentPage(item.id)}
                className={`sidebar-item ${currentPage === item.id ? 'active':''}`}>
                    {item.label}
                </button>
            ))}
        </nav>
    </aside>
    );
};

export default Sidebar;