import React, { Component } from 'react';
import axios from 'axios';

const https = require('https');

class AxiosTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      message : ''
    };
    this.getMessage = this.getMessage.bind(this);
  }
  getMessage () {
    axios
    //https://jsonplaceholder.typicode.com/posts
    //https://13.125.233.189:4000
      .get("https://13.125.233.189:4000",{
        withCredentials: true,
        
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      })
      .then((res)=>{
          console.log(res)
//        this.setState({posts : res.data.slice(0,10)})
        this.setState({message : res.data})

      });
  }

  componentDidMount() {
      this.getMessage();
  }

  render () {
//    
    return(
      <div>test message : {this.state.message}</div>
    )
//    
 //
/*    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="postCard" key={post.id}>
            <div className="cardContent">
              <span className="cardTitle">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div>No posts yet</div>
    )
    return (
      <div className="container">
        <h4 className="center">AxiosTest</h4>
        {postList}
      </div>
    )
*///
  }  
}

export default AxiosTest;