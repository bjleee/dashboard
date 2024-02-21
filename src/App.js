import React from "react";
import Sidebar from "./components/sidebar.jsx";
import Content from "./components/Content.jsx";
import './App.css'
const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Content />
      </div>
    </div>
  );
};

export default App;