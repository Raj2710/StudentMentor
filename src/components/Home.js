import React from 'react'
import {Link} from "react-router-dom"
import './Home.css';
function Home() {
    return (
        <div className="wrapper">

            <h3 style={{textAlign:"center",fontSize:"xx-large",padding:"20px"}}>Home</h3>
            <div className="elements">
                <Link to='add-student' className="homelink">
                    <button className="btn">Add Student</button>
                </Link>
                <Link to='add-mentor' className="homelink">
                    <button className="btn">Add Mentor</button>
                </Link>
                <Link to='assign-students' className="homelink">
                    <button className="btn">Assign Students</button>
                </Link>
                <Link to='change-mentor' className="homelink">
                    <button className="btn">Change Mentor</button>
                </Link>
                <Link to='view-mentor' className="homelink">
                    <button className="btn">View Mentor</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Home
