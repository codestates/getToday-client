import React, { Component } from 'react';
import moment from 'moment'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'

const groups = [
  { id: 1, title: 'Mon' },
  { id: 2, title: 'Tue' },
  { id: 3, title: 'Wed' },
  { id: 4, title: 'Thu' },
  { id: 5, title: 'Fri' },
  { id: 6, title: 'Sat' },
  { id: 7, title: 'Sun' },
]

const items = [
  {
    id: 2,
    group: 2,
    title: 'english',
    start_time: moment('2021-02-04 05:00'),
    end_time: moment('2021-02-04 07:00'),
    canMove: false,
    canResize: false,
    canChangeGroup: true,
    itemProps: {
      onDoubleClick: () => { console.log('You clicked double!') },
      style: {
        background: 'black'
      }
    }
  },
  {
    id: 3,
    group: 3,
    title: 'math',
    start_time: moment('2021-02-04 09:30'),
    end_time: moment('2021-02-04 10:30')
  },
  {
    id: 4,
    group: 1,
    title: 'computer science',
    start_time: moment('2021-02-04 15:00'),
    end_time: moment('2021-02-04 17:00')
  }
]

class Schedule extends Component {
  constructor (props) {
    super (props)
      this.state = {
        groups,
        items,
      }
  }

  render () {
    return (
      <div className="App">
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        />
      </div>
    );
  }  
}

export default Schedule;