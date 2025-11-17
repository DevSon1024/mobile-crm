const navbarItems = [
  { id: "dashboard", label: "Dashboard" },
  {
    id: "sales",
    label: "Sales",
    subItems: [
      { id: "create-invoice", label: "Create Invoice", parent: 'sales' },
      { id: "sales-history", label: "Sales History", parent: 'sales' },
      { id: "quotation", label: "Quatation", parent: 'sales' },
      { id: "sales-return", label: "Sales Return", parent: 'sales' },
    ],
  },
  {
    id: "purchase",
    label: "Purchase",
    subItems: [
      { id: "new-purchase", label: "New Purchase", parent:"purchase" },
      { id: "purchase-history", label: "Purchase History", parent:"purchase" }
    ],
  },
  { 
    id: "stock", 
    label: "Stock",
    subItems: [
      {id: "internal-stock", label: "Internal Stock", parent:"stock"},
      {id: "inventory-manager", label: "Inventory Manager", parent:"stock"},
      {id: "acknowledge-of-stn", label: "Aknowledge of STN", parent:"stock"}

    ] },
  { id: "suppliers", label: "Suppliers" },
  { id: "reports", label: "Reports",
    subItems: [
      { id: "sales-report", label: "Sales Report",parent:"reports" },
      { id: "inventory-report", label: "Inventory Report",parent:"reports" },
    ],
   },
  { id: "service", label: "Service" },
  { id: "addon", label: "Add-on" },
];

export default navbarItems;