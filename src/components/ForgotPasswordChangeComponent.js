import React, {Component} from 'react';
import UserService from '../services/UserService';
import '../App.css';

class ForgotPasswordChangeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            password: '',
            email: localStorage.getItem('email'),
            otp: localStorage.getItem('otp')
        }
        this.changePassword = this.changePassword.bind(this);
    }

    changePassword = (e) => {
        e.preventDefault();
        let forgotPasswordDto = {
            email: this.state.email,
            password: this.state.password, otp: this.state.otp
        };

        UserService.forgotPasswordChange(forgotPasswordDto).then(() => {
            this.props.history.push('/');
        });

    }


    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="rov">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">ForgotPasswordChange</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> New Password: </label>
                                        <input type="password" name="password" className="form-control"
                                               value={this.state.password} onChange={this.passwordHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.changePassword}> Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ForgotPasswordChangeComponent;
