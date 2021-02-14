import React, { Component } from 'react';
import moment from 'moment'
import Timeline from 'react-calendar-timeline'
import axios from 'axios'
//import { DataTimeline } from './DataTimeline'
import 'react-calendar-timeline/lib/Timeline.css'
class Schedule extends Component {
  constructor (props) {
    super (props)
    this.state = {
      groups : [
        { id: 1, title: 'Schedule' },
      ],
      items : [],
    }
      this.getSchedule = this.getSchedule.bind(this);
      this.getItems = this.getItems.bind(this);
  }
  getSchedule () {
    axios
      .post("https://localhost:4000/schedules/getSchedules",
      {
        userEmail: this.props.userInfo.userEmail
      },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      )
      .then((res)=>{
        console.log(res.data.data);
        /*
        {id: 5, title: "", startTime: "", endTime: "" date : ""}
          {
            id : 1,
            group : 1,
            title : 'sleeping',
            start_time : moment('2021-02-10 00:00'),
            end_time : moment('2021-02-10 06:00'),
            canMove : false
          },
        */
        for(let el of res.data.data) {
          const items = [...this.state.items, el]
          // this.setState({ items: items})
        this.props.getTodos(el)
        }
      });

    
  }

    getItems(todos) {
      for (let el of todos) {
        delete el.date
      }
    }


  componentDidMount() {
      this.getSchedule();
      this.getItems(this.props.todos);
  }
  render () {
    console.log(this.props.todos);
    return (
      <div className="App">
        <Timeline
          groups={this.state.groups}
          items={this.props.todos}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        />
      </div>
    );
  }  
}
export default Schedule;