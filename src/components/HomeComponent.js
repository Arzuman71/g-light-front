import React, {Component} from 'react';
import UserService from '../services/UserService';


class HomeComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            user: ''
        }
    }

    componentDidMount() {
        UserService.getUser().then((response) => {
            this.setState({user: response.data})
        });
    }

    carSave() {
        this.props.history.push('/car/save');
    }

    cars() {
        this.props.history.push('/cars');
    }

    editPassword() {
        this.props.history.push('/cars');
    }


    render() {
        return (
            <div>
                <h1 key={this.state.user.id}>Welcome Mr. {this.state.user.name} {this.state.user.surname}</h1>
                <h4>{this.state.user.gender} {this.state.user.age}</h4>
                <h4>Email - {this.state.user.email}</h4>
                <h4>phoneNumber - {this.state.user.phoneNumber}</h4>
                <h4>{this.state.user.about}</h4>

                <h2>
                    <button className="btn btn-primary" onClick={this.editPassword.bind(this)}>editPassword</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.cars.bind(this)}>cars</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.carSave.bind(this)}>add car</button>
                </h2>
                {this.state.user.picUrl ? (
                    <img
                        src={'http://localhost:8080/image/' + this.state.user.picUrl}
                    />
                ) : null}


            </div>
        );
    }
}

export default HomeComponent;
