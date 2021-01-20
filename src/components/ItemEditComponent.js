import React, {Component} from 'react';
import CarService from '../services/CarService';
import ItemService from "../services/ItemService";

class ItemEditComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            end: '',
            outset: '',
            startDate: '',
            type: '',
            price: '',
            carId: '',
            carBrand: '',
            numberOfPassengers: '',
            cars: []
        }
    }


    componentDidMount() {

        ItemService.getItemById(this.state.id).then((response) => {
            this.setState({end: response.data.end})
            this.setState({outset: response.data.outset})
            this.setState({startDate: response.data.startDate})
            this.setState({type: response.data.type})
            this.setState({price: response.data.price})
            this.setState({carId: response.data.carId})
            this.setState({carBrand: response.data.carBrand})
            this.setState({numberOfPassengers: response.data.numberOfPassengers})
        });
        CarService.cars().then((response) => {
            this.setState({cars: response.data})
        });

    }

    edit = (e) => {
        e.preventDefault();
        let item = {
            end: this.state.end, outset: this.state.outset, startDate: this.state.startDate,
            type: this.state.type, price: this.state.price, carId: this.state.carId,
            numberOfPassengers: this.state.numberOfPassengers,
        };
        console.log('item => ' + JSON.stringify(item));

        ItemService.change(item).then(() => {
            this.props.history.push('/items/active');
        });

    }


    home() {
        this.props.history.push('/user');
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
                <button className="btn btn-danger" onClick={this.home.bind(this)}
                        style={{marginLeft: "10px"}}>Home
                </button>
                <div className="container inner-form">
                    <div className="rov">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit item</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Type: </label>
                                        <select defaultValue={this.state.type} name="type" className="form-control"
                                                value={this.state.selectValue}
                                                onChange={this.carTypeHandler}>
                                            <option value="DEFAULT" disabled>{this.state.type}</option>
                                            <option value="CAR_DRIVER">CAR_DRIVER</option>
                                            <option value="TRUCK_DRIVER">TRUCK_DRIVER</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label> carBrand: </label>
                                        <input name="date" className="form-control"
                                               value={this.state.outset} onChange={this.outsetHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> end: </label>
                                        <input name="date" className="form-control"
                                               value={this.state.end} onChange={this.endHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> price: </label>
                                        <input name="carNumber"
                                               className="form-control"
                                               value={this.state.price} onChange={this.priceHandle}/>
                                    </div>
                                    <div className="form-group">
                                        <label> NumberOfPassengers: </label>
                                        <input name="numberOfPassengers"
                                               className="form-control"
                                               value={this.state.numberOfPassengers}
                                               onChange={this.numberOfPassengersHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> startDate: </label>
                                        <input type="datetime-local" name="startDate" className="form-control"
                                               value={this.state.startDate} onChange={this.startDateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> car: </label>
                                        <select defaultValue={this.state.carBrand} className="form-control" name="carId"
                                                value={this.state.selectValue}
                                                onChange={this.carIdHandler}>
                                            <option value="DEFAULT" disabled>{this.state.carBrand}</option>
                                            {this.state.cars.map(
                                                car =>
                                                    <option value={car.id}>{car.carBrand}</option>
                                            )}
                                        </select>
                                    </div>
                                    <button className="btn btn-success" onClick={this.edit}> Edit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemEditComponent;
