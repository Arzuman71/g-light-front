import React, {Component} from 'react';
import UserService from '../services/UserService';

class LoginComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',

        }
        this.loginUser = this.loginUser.bind(this);
        this.register = this.register.bind(this);
        this.forgotPass = this.forgotPass.bind(this);
    }

    getAuth() {
        return this.state.auth
    }

    loginUser = (e) => {
        e.preventDefault();
        let emailPass = {
            email: this.state.email, password: this.state.password,
        };
        console.log('user => ' + JSON.stringify(emailPass));

        UserService.login(emailPass).then(res => {
            this.props.history.push('/user');
        });
    }


    register() {
        this.props.history.push('/userRegister');
    }

    forgotPass() {
        this.props.history.push('/reestablish');
    }


    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="rov">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Login</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input type="email" placeholder="Email" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input type="password" name="password" className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.loginUser}> Login</button>

                                </form>
                                <h2>
                                    <div>
                                        <div className=" col-md-6 offset-md-3">
                                            <button className="btn btn-primary" onClick={this.register}>register
                                            </button>
                                        </div>
                                    </div>
                                </h2>
                                <h2>
                                    <div>
                                        <div className=" col-md-6 offset-md-3">
                                            <button className="btn btn-primary" onClick={this.forgotPass}>forgotPass
                                            </button>
                                        </div>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default LoginComponent;
