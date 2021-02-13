import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import StudySchedule from "./pages/StudySchedule";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: null,
      userInfo: null,
      accessToken: ""
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.issueAccessToken = this.issueAccessToken.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  componentDidMount() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    // axios.get("https://localhost:4000/user")
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({ userinfo: res.data, isLogin: true });
    //     this.props.history.push('/');
    //   })
    //   .catch((err) => {
    //     if (err.response.status === 401) {
    //       this.setState({ isLogin: false })
    //       this.props.history.push('/login');
    //     }
    //   })
  }

  setUserInfo(userInfo) {
    this.setState({ userInfo : {
      userEmail : userInfo.userEmail,
      userName : userInfo.username,
      mobile : userInfo.mobile
    } })
  }

  loginHandler(data) {
    this.setState({ isLogin: true });
    this.issueAccessToken(data.accessToken);
  }

  issueAccessToken(token) {
    this.setState({ accessToken: token });
  }

  handleLogout() {
    axios.post("https://localhost:4000/users/logout",
    { headers: { "Content-Type": "application/json" }, withCredentials: true })
      .then((res) => {
        this.setState({ userinfo: null, isLogin: false });
        this.props.history.push('/');
      })
  }

  handleschedule() {
    axios.post("https://localhost:4000/studyschedule")
      .then((res) => {
        this.setState({ userinfo: res.data, isLogin: true });
        this.props.history.push('/studyschedule');
      })
  }

  render() {
    const { isLogin, userInfo } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path='/login'
            render={() => (
              <Login isLogin={isLogin} loginHandler={this.loginHandler.bind(this)} setUserInfo={this.setUserInfo.bind(this)} />
            )}
          />
          <Route exact path='/signup' render={() => <Signup isLogin={isLogin} />} />
          <Route
            exact
            path='/mypage'
            render={() => <Mypage userInfo={userInfo} handleLogout={this.handleLogout.bind(this)} />}
          />
          <Route
            exact
            path='/studyschedule'
            render={() => <StudySchedule userInfo={userInfo} handleschedule={this.handleschedule.bind(this)} />}
          />
          <Route
            path='/'
            render={() => {
              if (isLogin) {
                return <Redirect to='/mypage' />;
              }
              return <Redirect to='/login' />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
