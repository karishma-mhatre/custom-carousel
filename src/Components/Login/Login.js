import React , { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../Actions';
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
    }

    logIn = (e) => {
        e.preventDefault();
        let username = e.target.elements.user.value;
        let password = e.target.elements.pwd.value;
        if(username === "shaadi" && password === "123") {
            this.props.dispatch(logIn());
            window.location.hash = "/carousel"
        }else {
            console.warn("Error");
            this.setState({error: "Invalid Credentials!"})
        }
    }

    render() {
        if(this.props.isLoggedIn) {
            window.location.hash = "/carousel"
        }
        
        return (
            <div className="container login">
                <div className="login-title">CARAOUSEL</div>
                <div className="login-form">
                    <form onSubmit={(e) => {this.logIn(e)}}>
                        <div className="input-container">
                            <label className="input-label">Username</label>
                            <input className="input" name="user" type="text" required></input>
                        </div>
                        <div className="input-container">
                            <label className="input-label">Password</label>
                            <input className="input" name="pwd" type="password" required></input>
                        </div>
                        <div className="btn-container">
                            <button className="btn" type="submit" >Login</button>
                        </div>
                    </form>
                </div>
                {
                    this.state.error && 
                    <div className="login-error">
                        { this.state.error }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.carousel.isLoggedIn
})

export default connect(mapStateToProps)(Login);