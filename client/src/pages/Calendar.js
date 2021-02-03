import React from 'react';

function Calendar({ userinfo, handleLogout }) {
    if (!userinfo) {
        return <div></div>
    } else {
        return (
            <div>
                <center>
                    <h1>Calendar</h1>
                    <div className='username'>{userinfo.username}</div>
                    <div className='email'>{userinfo.email}</div>
                    <div className='mobile'>{userinfo.mobile}</div>
                    <button className='btn-logout' onClick={handleLogout}>LOGOUT</button>
                </center>
            </div>
        )
    }
}

export default Calendar;