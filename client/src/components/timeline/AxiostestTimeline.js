// import React, { Component } from 'react';
// import axios from 'axios';

// const https = require('https');

// class AxiosTest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       message : ''
//     };
//     this.getMessage = this.getMessage.bind(this);
//   }
//   getMessage () {
//     axios
//     //https://jsonplaceholder.typicode.com/posts
//     //https://13.125.233.189:4000
//     //https://www.gettoday3.tk
//       .get("https://jsonplaceholder.typicode.com/posts",{
//         withCredentials: true,
        
//         httpsAgent: new https.Agent({
//           rejectUnauthorized: false
//         })
//       })
//       .then((res)=>{
//         console.log('test')
//           console.log(res.data.slice(0,10))
//         this.setState({posts : res.data.slice(0,10)})
// //        this.setState({message : res.data})

//       });
//   }

//   componentDidMount() {
//       this.getMessage();
//   }

//   render () { 
//     return(
//       <div>test message : {this.state.message}</div>
//     )  
//   }  
// }

// export default AxiosTest;

// //AxiostestTimeline(model) + mypage - datatimeline(controller) - 가공해서 viewTimeline