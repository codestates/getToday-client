// import { calendarFormat } from 'moment';
// import WeekCalendar from 'react-week-calendar';
// import 'react-week-calendar/dist/style.less';


// function App() {
//   return (
//     'Hello calendar'
//   );
// }

// export default App;

import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Calendar from "./pages/Calendar";
import axios from "axios";

class App extends React.Component {
  state = {
    isLogin: false,
    userinfo: null,
  };

  handleResponseSuccess() {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    axios
      .get('http://localhost:4000/user')
      .then(res => {
        this.setState({ isLogin: true, userinfo: res.data });
        this.props.history.push('/calendar');
      })
  }
  // 로그아웃 요청
  handleLogout() {
    axios
      .post('http://localhost:4000/signout')
      .then(res => {
        this.setState({ isLogin: false, userinfo: null });
        this.props.history.push('/');
      })
  }
  render() {
    const { isLogin, userinfo } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path='/login'
            render={() => (
              <Login handleResponseSuccess={this.handleResponseSuccess.bind(this)} />
            )}
          />
          <Route exact path='/signup' render={() => <Signup />} />
          <Route
            exact
            path='/calendar'
            render={() => <Calendar userinfo={userinfo} handleLogout={this.handleLogout.bind(this)} />}
          />
          <Route
            path='/'
            render={() => {
              if (isLogin) {
                return <Redirect to='/Calendar' />;
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
