import React , { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../Actions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
    }

    logIn = (e) => {
        e.preventDefault();
        console.log(e.target.elements);
        let username = e.target.elements.user.value;
        let password = e.target.elements.pwd.value;
        if(username === "shaadi" && password === "123") {
            this.props.dispatch(logIn());
            window.location.hash = "/carousel"
        }else {
            console.warn("Error");
            this.setState({error: "Invalid Credentials"})
        }
    }

    render() {
        if(this.props.isLoggedIn) {
            window.location.hash = "/carousel"
        }
        
        return (
            <div>
                <div>
                    <form onSubmit={(e) => {this.logIn(e)}}>
                        <div>
                            <label>Username</label>
                            <input name="user" type="text" required></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input name="pwd" type="password" required></input>
                        </div>
                        <div>
                            <button type="submit" >Login</button>
                        </div>
                    </form>
                </div>
                {
                    this.state.error && 
                    <div>
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