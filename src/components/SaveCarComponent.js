import React, {Component} from 'react';
import CarService from '../services/CarService';
import flatpickr from "flatpickr";

import 'react-materialize';
import 'materialize-css';
import '../main.css';

class SaveCarComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            carType: '',
            carBrand: '',
            carModel: '',
            carNumber: '',
            color: '',
            year: ''
        }
        this.datePicker = React.createRef();
        this.save = this.save.bind(this);
    }


    Home() {
        this.props.history.push('/user');
    }

    save = (e) => {
        e.preventDefault();
        let car = {
            carType: this.state.carType, carBrand: this.state.carBrand, carModel: this.state.carModel,
            carNumber: this.state.carNumber, color: this.state.color, year: this.state.year,
        };
        console.log('car => ' + JSON.stringify(car));

        CarService.save(car).then(res => {
            this.props.history.push('/cars');
        });

    }

    componentDidMount() {

        flatpickr(this.datePicker.current, {
            onChange: this.onChange
        });
    }

    onChange = (selectedDates, dateStr, instance) => {
        this.setState({year: dateStr})
    }


    carTypeHandler = (event) => {
        this.setState({carType: event.target.value});
    }
    carBrandHandler = (event) => {
        this.setState({carBrand: event.target.value});
    }
    carModelHandler = (event) => {
        this.setState({carModel: event.target.value});
    }
    carNumberHandler = (event) => {
        this.setState({carNumber: event.target.value});
    }
    colorHandler = (event) => {
        this.setState({color: event.target.value});
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
                            <h3 className="text-center">Add Car</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Type: </label>
                                        <select defaultValue={'DEFAULT'} name="type" className="form-control"
                                                value={this.state.selectValue}
                                                onChange={this.carTypeHandler}>
                                            <option value="DEFAULT" disabled>Choose a Type</option>
                                            <option value="CAR">CAR</option>
                                            <option value="BUS">BUS</option>
                                            <option value="TRUCK">TRUCK</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label> carBrand: </label>
                                        <input placeholder="brand" name="date"
                                               className="form-control"
                                               value={this.state.carBrand} onChange={this.carBrandHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> carModel: </label>
                                        <input placeholder="brand" name="date"
                                               className="form-control"
                                               value={this.state.carModel} onChange={this.carModelHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> CarNumber: </label>
                                        <input name="carNumber"
                                               className="form-control"
                                               value={this.state.carNumber} onChange={this.carNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> color: </label>
                                        <select defaultValue={'DEFAULT'} name="type" className="form-control"
                                                value={this.state.selectValue}
                                                onChange={this.colorHandler}>
                                            <option value="DEFAULT" disabled>Choose a color</option>
                                            <option value="BLACK">BLACK</option>
                                            <option value="WHITE">WHITE</option>
                                            <option value="DARK_GREY">DARK_GREY</option>
                                            <option value="GREY">GREY</option>
                                            <option value="BURGUNDY">BURGUNDY</option>
                                            <option value="RED">RED</option>
                                            <option value="DARK_BLUE">DARK_BLUE</option>
                                            <option value="BLUE">BLUE</option>
                                            <option value="DARK_GREEN">DARK_GREEN</option>
                                            <option value="GREEN">GREEN</option>
                                            <option value="BROWN">BROWN</option>
                                            <option value="BEIGE">BEIGE</option>
                                            <option value="ORANGE">ORANGE</option>
                                            <option value="YELLOW">YELLOW</option>
                                            <option value="PURPLE">PURPLE</option>
                                            <option value="PINK">PINK</option>
                                        </select>
                                    </div>

                                    <div className="inner-form">
                                        <div className="input-field third-wrap ">
                                            <div className="icon-wrap">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24">
                                                    <path
                                                        d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                                </svg>
                                            </div>
                                            <input min="2019-01-01"
                                                   ref={this.datePicker} className="datepicker"
                                                   id="return" name="dateFrom"
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


export default SaveCarComponent;
