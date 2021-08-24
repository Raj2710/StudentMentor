import React from 'react'
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PeopleIcon from '@material-ui/icons/People';
import './Topbar.css'
function Topbar() {
    return (
        <div className="container">
            <h2 className="title">
                <span>Student Mentor Management System</span>
            </h2>
            <div className="side-nav">
                <Link to='/home' className="TLink">
                    <span><HomeIcon/> Home</span>
                </Link>
                <Link to='/all-mentors' className="TLink">
                    <span><EmojiPeopleIcon/>All-Mentors</span>
                </Link>
                <Link to='/all-students' className="TLink">
                    <span><PeopleIcon/>All-Students</span>
                </Link>
            </div>
        </div>
    )
}

export default Topbar
