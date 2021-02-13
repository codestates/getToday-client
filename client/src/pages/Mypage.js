import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

axios.defaults.withCredentials = true;

function Mypage(props) {
    const { userInfo, handleLogout } = props;
    console.log(userInfo);

    return (userInfo ?
        <div>
            <h1>마이페이지</h1>
            <div className="username">{userInfo.username}</div>
            <div className="email">{userInfo.email}</div>
            <div className="mobile">{userInfo.mobile}</div>

            <button className="btn btn-logout" onClick={handleLogout}>로그아웃</button>
            <Link to='/studyschedule'><button>시작하기</button></Link>
        </div>
        : '');

}

export default Mypage;