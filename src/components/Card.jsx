import React from "react";
import { BsUpload } from 'react-icons/bs';
import { IoFileTray } from 'react-icons/io5';

const course = [
    {
        title: 'Recent Files',
        icon: <IoFileTray/>,
    },
    {
        title: 'Upload New File',
        icon: <BsUpload/>,
    },
];

const Card = () => {
    return (
        <div className="card-container">
            {course.map((item) => (
                <div className="card">
                    <div className = "card-cover">{item.icon}</div>
                    <div className="card-title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}            
        </div>
    );
}
export default Card; 