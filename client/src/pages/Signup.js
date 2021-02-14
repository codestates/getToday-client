import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { FaUserEdit } from "react-icons/fa";

axios.defaults.withCredentials = true;
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
            mobile: "",
            errorMessage: ""
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleSignup = () => {
        const { email, password, mobile, username } = this.state;
        if (!email || !password || !mobile || !username) {
            this.setState({
                errorMessage: "All items are required"
            });
            return;
        }
        else {
            this.setState({
                errorMessage: ""
            });
        }

        axios
            .post("https://www.gettoday4.click/users/signup", {
                email: email,
                password: password,
                userName: username,
                mobile: mobile,
            },
                { headers: { "Content-Type": "application/json" }, withCredentials: true })
            .then((res) => {
                alert("Your membership has been registered!");
                this.props.history.push("/");
            })
            .catch((err) => alert("You are already a member."));
    }

    render() {
        return (
            <div>
                <center>
                    <h1><FaUserEdit size='200' /><br></br>SIGNUP</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>All items are required</div>
                        <div className='inputForm'>
                            <span>EMAIL</span>
                            <input className='input'
                                type="email"
                                onChange={this.handleInputValue("email")}
                            ></input>
                        </div>
                        <div className='inputForm'>
                            <span>PASSWORD</span>
                            <input className='input'
                                type="password"
                                onChange={this.handleInputValue("password")}
                            ></input>
                        </div>
                        <div className='inputForm'>
                            <span>NAME</span>
                            <input className='input'
                                type='text'
                                onChange={this.handleInputValue("username")}
                            ></input>
                        </div>
                        <div className='inputForm'>
                            <span>TEL</span>
                            <input className='input'
                                type='tel'
                                onChange={this.handleInputValue("mobile")}
                            ></input>
                        </div>
                        <div>
                            <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Do you already have an ID?</Link>
                        </div>
                        <br></br>
                        <button
                            className="btn btn-signup"
                            type='submit'
                            onClick={this.handleSignup}
                        >
                            SIGNUP
            </button>
                        {this.state.errorMessage ?
                            <div className="alert-box">
                                {this.state.errorMessage}
                            </div> : ''}
                    </form>
                </center>
            </div>
        );
    }
}

export default withRouter(Signup);
