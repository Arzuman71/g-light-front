import React, {Component} from 'react';
import MainService from "../services/MainService";
import 'react-materialize';
import 'materialize-css';
import '../main.css';


class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        this.props.history.push('/user/auth');
    }

    logout = () => {
        MainService.logout().then(
            this.props.history.push('/'))
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <button className="btn btn-success" onClick={this.cancel.bind(this)}>
                            <h2>G. <em>Light</em></h2>
                        </button>
                        <div className=" col-md-6 offset-md-3">
                            <button onClick={this.login} className="btn btn-primary">login</button>
                        </div>
                        <div>
                            <button className="btn btn-success" onClick={this.logout}>logout</button>
                        </div>

                    </nav>
                </header>
            </div>

        );
    }
}

export default HeaderComponent;
