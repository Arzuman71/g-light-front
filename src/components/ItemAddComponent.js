import React, {Component} from 'react';
import CarService from '../services/CarService';

import 'react-materialize';
import 'materialize-css';
import '../main.css';
import ItemService from "../services/ItemService";

class ItemAddComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            end: '',
            outset: '',
            startDate: '',
            type: '',
            price: '',
            carId: '',
            numberOfPassengers: '',
            cars: []
        }
        this.save = this.save.bind(this);
    }


    Home() {
        this.props.history.push('/user');
    }

    componentDidMount() {
        CarService.cars().then((response) => {
            this.setState({cars: response.data})
        });
    }

    save = (e) => {
        e.preventDefault();
        let item = {
            end: this.state.end, outset: this.state.outset, startDate: this.state.startDate,
            type: this.state.type, price: this.state.price, carId: this.state.carId,
            numberOfPassengers: this.state.numberOfPassengers,
        };
        console.log('item => ' + JSON.stringify(item));

        ItemService.save(item).then(res => {
            this.props.history.push('/user');
        });

    }


    endHandler = (event) => {
        this.setState({end: event.target.value});
    }
    outsetHandler = (event) => {
        this.setState({outset: event.target.value});
    }
    startDateHandler = (event) => {
        this.setState({startDate: event.target.value});
    }
    typeHandler = (event) => {
        this.setState({type: event.target.value});
    }
    carIdHandler = (event) => {
        this.setState({carId: event.target.value});
    }
    numberOfPassengersHandler = (event) => {
        this.setState({numberOfPassengers: event.target.value});
    }

    priceHandler = (event) => {
        this.setState({price: event.target.value});
    }


    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.Home.bind(this)}
                        style={{marginLeft: "10px"}}>Home
                </button>
                <div className="container inner-form">
                    <div className="rov">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add item</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Type: </label>
                                        <select defaultValue={'DEFAULT'} name="type" className="form-control"
                                                value={this.state.selectValue}
                                                onChange={this.typeHandler}>
                                            <option value="DEFAULT" disabled>Choose a Type</option>
                                            <option value="CAR_DRIVER">CAR_DRIVER</option>
                                            <option value="TRUCK_DRIVER">TRUCK_DRIVER</option>
                                            <option value="PASSENGER">PASSENGER</option>
                                            <option value="SEEKER_TRUCK">SEEKER_TRUCK</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label> outset: </label>
                                        <input placeholder="outset" name="outset"
                                               className="form-control"
                                               value={this.state.outset} onChange={this.outsetHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> end: </label>
                                        <input placeholder="end" name="end"
                                               className="form-control"
                                               value={this.state.end} onChange={this.endHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> NumberOfPassengers: </label>
                                        <input name="numberOfPassengers"
                                               className="form-control"
                                               value={this.state.numberOfPassengers}
                                               onChange={this.numberOfPassengersHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> price: </label>
                                        <input name="price"
                                               className="form-control"
                                               value={this.state.price}
                                               onChange={this.priceHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> startDate: </label>
                                        <input type="datetime-local" name="startDate" className="form-control"
                                               value={this.state.startDate} onChange={this.startDateHandler}/>
                                    </div>
                                    <div className=" col-md-6 offset-md-3">
                                        <label> car: </label>

                                        <select className="form-control" name="carId" value={this.state.selectValue}
                                                onChange={this.carIdHandler}>
                                            {this.state.cars.map(
                                                car =>
                                                    <option value={car.id}>{car.carBrand}</option>
                                            )}
                                        </select>
                                    </div>

                                    <button className="btn btn-success" onClick={this.save}> Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemAddComponent;
