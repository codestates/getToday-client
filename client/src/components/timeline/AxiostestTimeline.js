import React, { Component } from 'react';
import axios from 'axios';

const https = require('https');

class AxiosTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schdules: null
    };
    this.getMessage = this.getMessage.bind(this);
  }
  getMessage () {
    axios
      .post("https://jsonplaceholder.typicode.com/posts",
      {
        userEmail: '1234@1.1'
      },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      )
      .then((res)=>{
        console.log('test')
        // console.log(res.data.slice(0,10))
        // this.setState({posts : res.data.slice(0,10)})
//        this.setState({message : res.data})

      });
  }

  componentDidMount() {
      this.getMessage();
  }

  render () { 
    return(
      <div>test message : {this.state.message}</div>
    )  
  }  
}

export default AxiosTest;

//AxiostestTimeline(model) + mypage - datatimeline(controller) - 가공해서 viewTimeline