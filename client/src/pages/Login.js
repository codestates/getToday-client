import React from "react";
// import "../App.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

axios.defaults.withCredentials = true;

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleLogin = () => {
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({
                errorMessage: "Please enter your email and password."
            });
            return;
        }
        else {
            this.setState({
                errorMessage: ""
            });
        }

        return axios
            .post("https://localhost:4000/users/login", {
                email: email,
                password: password,
            }, { headers: { "Content-Type": "application/json" }, withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.props.loginHandler(res.data.data)
                this.props.setUserInfo(res.data.data.userInfo)
                this.props.history.push('/');
            })
            .catch((err) => {
                alert("Login failed");
                console.log(err);
            });
    };
    render() {
        return (
            <div>
                <center>
                    <h1 className='title'>get<br></br>Today<br></br><FaCheck size='250' /></h1>
                    <br></br><br></br><br></br><br></br>
                    <h1><FaUserCheck size='200' /><br></br>SIGN IN</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='inputForm'>
                            <span>EMAIL</span>
                            <input className='input' type='email' onChange={this.handleInputValue("email")}></input>
                        </div>
                        <div className='inputForm'>
                            <span>PASSWORD</span>
                            <input className='input' type='password' onChange={this.handleInputValue("password")}></input>
                        </div>

                        <button className='btn'>
                            <Link to='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>SIGN UP</Link>
                        </button>

                        <br></br><br></br>

                        {/* <Link to='/mypage'><button className='btn btn-login' type='submit' onClick={this.handleLogin}>SIGN IN</button></Link> */}
                        <button className='btn btn-login' type='submit' onClick={this.handleLogin}>
                            SIGN IN
            </button>
                        <br></br><br></br><br></br><br></br><br></br>


                        {this.state.errorMessage ?
                            <div className="alert-box">
                                {this.state.errorMessage}
                            </div> : ''}
                    </form>
                </center>
            </div >
        );
    }
}

export default withRouter(Login);
