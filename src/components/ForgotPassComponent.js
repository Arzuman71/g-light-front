import React, {Component} from "react";
import UserService from "../services/UserService";

class ForgotPassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',

        }
        this.forgotPass = this.forgotPass.bind(this);
    }

    forgotPass = (e) => {
        e.preventDefault();

        UserService.forgotPass(this.state.email).then(() => {
            this.props.history.push('/');
        });

    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="rov">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Register</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input type="email" placeholder="Email" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.forgotPass}> Reestablish</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ForgotPassComponent;
