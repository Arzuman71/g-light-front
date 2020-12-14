import React, {Component} from 'react';
import 'react-materialize';
import 'materialize-css';
import '../main.css';
import UserService from "../services/UserService";


class ForgotPasswordResetComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: this.props.match.params.email,
            otp: this.props.match.params.otp,
        }
    }

    componentDidMount() {
        let emailAndOtp = {
            email: this.state.email, otp: this.state.otp
        };
        console.log( this.props.match.params.email+"emailAndOtp" + JSON.stringify(emailAndOtp))
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
