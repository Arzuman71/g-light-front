import React, {Component} from 'react';
import CarService from '../services/CarService';
import flatpickr from "flatpickr";

import 'react-materialize';
import 'materialize-css';
import '../main.css';
import ItemService from "../services/ItemService";

class SaveItemComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            outset: '',
            end: '',
            price: '',
            type: '',
            startDate: '',
            numberOfPassengers: '',
            carId: '',
            cars: []
        }
        this.save = this.save.bind(this);
    }


    Home() {
        this.props.history.push('/user');
    }

    save = (e) => {
        e.preventDefault();
        let item = {
            outset: this.state.outset, end: this.state.end, price: this.state.price,
            type: this.state.type, startDate: this.state.startDate,
            numberOfPassengers: this.state.numberOfPassengers, carId: this.state.carId,
        };
       // console.log('item => ' + JSON.stringify(item));

        ItemService.save(item).then(res => {
            this.props.history.push('/user');
        });

    }

    componentDidMount() {

        CarService.cars().then((response) => {
            this.setState({cars: response.data})
        });
    }


    TypeHandler = (event) => {
        this.setState({type: event.target.value});
    }
    outsetHandler = (event) => {
        this.setState({outset: event.target.value});
    }
    endHandler = (event) => {
        this.setState({end: event.target.value});
    }
    priceHandler = (event) => {
        this.setState({price: event.target.value});
    }
    numberOfPassengersHandler = (event) => {
        this.setState({numberOfPassengers: event.target.value});
    }
    carIdHandler = (event) => {
        this.setState({carId: event.target.value});
    }
    startDateHandler = (event) => {
        this.setState({startDate: event.target.value});
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
                            <h3 className="text-center">Add Item</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Type: </label>
                                        <select defaultValue={'DEFAULT'} name="type" className="form-control"
                                                value={this.state.selectValue}
                                                onChange={this.TypeHandler}>
                                            <option value="DEFAULT" disabled>Choose a Type</option>
                                            <option value="CAR_DRIVER">CAR_DRIVER</option>
                                            <option value="TRUCK_DRIVER">TRUCK_DRIVER</option>
                                            <option value="PASSENGER">PASSENGER</option>
                                            <option value="SEEKER_TRUCK">SEEKER_TRUCK</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label> Outset: </label>
                                        <input  name="date" className="form-control"
                                               value={this.state.outset} onChange={this.outsetHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> end: </label>
                                        <input  name="date" className="form-control"
                                               value={this.state.end} onChange={this.endHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> price: </label>
                                        <input name="carNumber"
                                               className="form-control"
                                               value={this.state.price} onChange={this.priceHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> numberOfPassengers: </label>
                                        <input name="carNumber"
                                               className="form-control"
                                               value={this.state.numberOfPassengers} onChange={this.numberOfPassengersHandler}/>
                                    </div>

                                    <div className=" col-md-6 offset-md-3">
                                        <label> car: </label>

                                        <select className="form-control" name="userId" value={this.state.selectValue}
                                                onChange={this.carIdHandler} >
                                            {this.state.cars.map(
                                                car =>
                                                    <option value={car.id}>{car.carBrand}</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className="inner-form">
                                        <div className="input-field third-wrap ">
                                            <input type="datetime-local" className="datepicker"
                                                   id="return" name="dateFrom"
                                                   value={this.state.startDate} onChange={this.startDateHandler}
                                            />
                                        </div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.save}> Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SaveItemComponent;
