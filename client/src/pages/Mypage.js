import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

axios.defaults.withCredentials = true;

function Mypage(props) {
    const { userInfo, handleLogout } = props;
    console.log(userInfo);

    return (userInfo ?
        <div>
            <center>
                <h1><FaUser size='170' /><br></br>MY PAGE</h1>
                <div className="username">{userInfo.username}</div>
                <div className="email">{userInfo.email}</div>
                <div className="mobile">{userInfo.mobile}</div>

                <button className="btn btn-logout" onClick={handleLogout}>SIGN OUT</button>
                <br></br><br></br>
                <Link to='/studyschedule'><button className='btn'>GET STARTED</button></Link>
            </center>
        </div>
        : '');

}

export default Mypage;