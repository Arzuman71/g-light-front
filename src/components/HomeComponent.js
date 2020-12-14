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

    carAdd() {
        this.props.history.push('/car/add');
    }
    cars() {
        this.props.history.push('/cars');
    }

    addItem() {
        this.props.history.push('/item/add');
    }

    itemsActive() {
        this.props.history.push('/items/active');
    }

    itemsArchived() {
        this.props.history.push('/items/archived');
    }

    userEdit() {
        this.props.history.push('/user/edit');
    }

    preferenceEdit() {
        this.props.history.push('/preference/edit');
    }

    passwordEdit() {
        this.props.history.push('/password/edit');
    }

    itemAdd() {
        this.props.history.push('/item/add');
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
                    <button className="btn btn-primary" onClick={this.cars.bind(this)}>cars</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.carAdd.bind(this)}>add car</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.addItem.bind(this)}>add item</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.itemsActive.bind(this)}>items active</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.itemsArchived.bind(this)}>items archived</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.userEdit.bind(this)}>user data edit</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.preferenceEdit.bind(this)}>preference edit
                    </button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.passwordEdit.bind(this)}>password Edit</button>
                </h2>
                <h2>
                    <button className="btn btn-primary" onClick={this.itemAdd.bind(this)}>item add</button>
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
