import React, { Component } from "react";
// import AxiosTest from "../../no.js";
import Todo from "../components/todo/todo.js";
import { Link } from "react-router-dom";

import "../cssfolder/timelinefolder/timeline.css";
import "../cssfolder/todo/todo.css"

class StudySchedule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="StudySchedule">
        {/* <StudyTimeline /> */}
        <Todo userInfo={this.props.userInfo}/>
        {/* <AxiosTest userInfo={this.props.userInfo}/> */}
        <br></br>
        <div><Link to='/mypage'><button className='btn'>MY PAGE</button></Link></div>
      </div>

    );
  }
}

export default StudySchedule;

//로그인 후 보여지는 화면