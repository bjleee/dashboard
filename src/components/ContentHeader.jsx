// ContentHeader.jsx

import React, { useState } from "react";
import { BiNotification, BiSearch } from "react-icons/bi";

const ContentHeader = () => {
    // State cho ô tìm kiếm
    const [searchText, setSearchText] = useState("");

    return (
        <div className="content-header">
            {/* Tiêu đề */}
            <h1 className="header-title">Dashboard</h1>
        </div>
    );
};

export default ContentHeader;
