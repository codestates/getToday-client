import React, { Component } from "react";

import StudyTimeline from "../components/timeline/ViewTimeline.js";
import AxiosTest from "../components/timeline/AxiostestTimeline.js";
import Todo from "../components/todo/todo.js";
import { Link } from "react-router-dom";

import "../cssfolder/timelinefolder/timeline.css";
import "../cssfolder/todo/todo.css"

class StudySchedule extends Component {
  render() {
    return (
      <div className="StudySchedule">
        <StudyTimeline />
        <Todo />
        <AxiosTest />
        <br></br>
        <div><Link to='/mypage'><button className='btn'>MY PAGE</button></Link></div>
      </div>

    );
  }
}

export default StudySchedule;

//로그인 후 보여지는 화면