import React, {Component} from 'react';
import 'react-materialize';
import 'materialize-css';
import '../main.css';
import UserService from "../services/UserService";


class ForgotPasswordResetComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email:  new URLSearchParams(this.props.location.search).get('email'),
            otp: new URLSearchParams(this.props.location.search).get('otp'),
        }
    }

    componentDidMount() {

        console.log(this.state.otp + "  email :" + JSON.stringify(this.state.email))
        UserService.forgotPasswordReset(this.state.email, this.state.otp).then(() => {
            this.props.history.push('/user/forgotPassword/change');
        });
    }


    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ForgotPasswordResetComponent;
