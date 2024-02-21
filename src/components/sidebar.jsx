import React from "react";
import { BiHome, BiLogOut, BiMessage, BiSolidReport, BiStats, BiTask } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import '../styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className='menu'>
            <div className="logo">
                <BiHome className="logo-icon"/>
                <h2>Dashboard</h2>
            </div>
            <div className="menu-list">
                < a href="#" className="item">
                    <VscAccount className="acount-icon"/>
                    Account
                </a>
                <a href="#" className="item">
                    <BiMessage className="message-icon"/>
                    Message Us
                </a>
                <a href="#" className="item">
                    <BiSolidReport className="report-icon"/>
                    Report
                </a>
                <a href="#" className="item">
                    <BiLogOut className="logout-icon"/>
                    Log Out
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
