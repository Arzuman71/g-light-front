import React, {Component} from 'react';
import UserService from '../services/UserService';
import '../App.css';
import MainService from "../services/MainService";

class PasswordEditComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            oldPassword: '',
            password: '',
            confirmPassword: ''
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);

    }


    edit = (e) => {
        e.preventDefault();
        let passwordDto = {
            password: this.state.password, confirmPassword: this.state.confirmPassword,
            oldPassword: this.state.oldPassword
        };
        UserService.passwordChange(passwordDto).then(() => {
            this.props.history.push('/');
        });
    }
    delete = () => {
        UserService.delete.then(
            this.props.history.push('/'))
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    changeConfirmPasswordHandler = (event) => {
        this.setState({confirmPassword: event.target.value});
    }
    oldPasswordHandler = (event) => {
        this.setState({oldPassword: event.target.value});
    }

    render() {
        return (
            <div className="container">
                <div className="rov">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">edit password</h3>
                        <div className="card-body">
                            <form>

                                <div className="form-group">
                                    <label>Old Password: </label>
                                    <input type="password" name="password" className="form-control"
                                           value={this.state.oldPassword} onChange={this.oldPasswordHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input type="password" name="password" className="form-control"
                                           value={this.state.password} onChange={this.changePasswordHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> ConfirmPassword: </label>
                                    <input type="password" name="confirmPassword" className="form-control"
                                           value={this.state.confirmPassword}
                                           onChange={this.changeConfirmPasswordHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.edit}> Edit</button>
                            </form>
                        </div>
                    </div>
                    <h2>
                        <button className="btn btn-primary" onClick={this.delete}>delete account</button>
                    </h2>
                </div>
            </div>
        );
    }
}


export default PasswordEditComponent;
