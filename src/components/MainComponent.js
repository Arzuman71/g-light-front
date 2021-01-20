import React, {Component} from 'react';
import flatpickr from 'flatpickr';
import Choices from 'choices.js';
import 'react-materialize';
import 'materialize-css';
import '../main.css';
import MainService from "../services/MainService";
import StarRatingComponent from 'react-star-rating-component';

import {FaStar} from "react-icons/fa";


class MainComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            outset: '',
            end: '',
            dateFrom: null,
            type: '',
            items: []
        }
        this.datePicker = React.createRef();
        this.type = React.createRef();
        this.search = this.search.bind(this);
    }

    search = (e) => {
        e.preventDefault();
        let searchItems = {
            outset: this.state.outset, end: this.state.end, dateFrom: this.state.dateFrom, type: this.state.type
        };
        //  console.log('searchItems => ' + JSON.stringify(searchItems));

        MainService.searchItem(searchItems).then((response) => {
            this.setState({items: response.data})
        });
    }

    itemDetails(id) {
        this.props.history.push(`/item/details/${id}`);
    }

    componentDidMount() {
        new Choices("#choices-single-default", {
            searchEnabled: false,
        });

        flatpickr(this.datePicker.current, {
            onChange: this.onChange
        });

    }

    onChange = (selectedDates, dateStr, instance) => {
        this.setState({dateFrom: dateStr})
    }
    changeOutsetHandler = (event) => {
        this.setState({outset: event.target.value});
    }
    changeEndHandler = (event) => {
        this.setState({end: event.target.value});
    }
    changeDateFromHandler = (event) => {
        this.setState({dateFrom: event.target.value});
    }
    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="s002">
                    <form>
                        {/*  <fieldset>
                     <legend>SEARCH HOTEL</legend>
                  </fieldset>*/}
                        <div className="inner-form">

                            <div className="input-field second-wrap">
                                <div className="icon-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                    </svg>
                                </div>
                                <input id="search" type="text" placeholder="from?"
                                       value={this.state.outset} onChange={this.changeOutsetHandler}/>
                            </div>

                            <div className="input-field second-wrap">
                                <div className="icon-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                    </svg>
                                </div>
                                <input id="search2" type="text" placeholder="to?"
                                       value={this.state.end} onChange={this.changeEndHandler}/>
                            </div>

                            <div className="input-field third-wrap">
                                <div className="icon-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                    </svg>
                                </div>
                                <input min="2019-01-01"
                                       ref={this.datePicker} className="datepicker"
                                       id="return" name="dateFrom" placeholder="today"
                                />
                            </div>

                            <div className="input-field fouth-wrap">
                                <div className="icon-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         stroke="#777777" stroke-width="3.5" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <polyline points="4 7 4 4 20 4 20 7"></polyline>
                                        <line x1="9" y1="20" x2="15" y2="20"></line>
                                        <line x1="12" y1="4" x2="12" y2="20"></line>
                                    </svg>
                                </div>

                                <select ref={this.type} type="select" id="choices-single-default"
                                        name="choices-single-default"
                                        value={this.state.selectValue} onChange={this.changeTypeHandler}>
                                    <option placeholder="">Choose a Type</option>
                                    <option value="CAR_DRIVER">CAR_DRIVER</option>
                                    <option value="TRUCK_DRIVER">TRUCK_DRIVER</option>
                                </select>
                            </div>
                            <div className="input-field fifth-wrap">
                                <button onClick={this.search} className="btn-search" type="button">SEARCH</button>
                            </div>
                        </div>
                    </form>
                </div>
                {
                    this.state.items.map(
                        item =>
                            <ul key={item.id}>
                                <li> {item.name}</li>
                                <li> {item.surname}</li>
                                <li> {item.outset}</li>
                                <li> {item.end}</li>
                                {item.picture ? (
                                    <img
                                        src={'http://localhost:8080/image/'+ item.picture}
                                    />
                               ) : null}
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    renderStarIcon={() => <span><FaStar size={20}></FaStar></span>}
                                    starCount={5}
                                    value={3.5}
                                />

                                <button style={{margin: "10px"}} onClick={() => this.itemDetails(item.id)}
                                        className="btn btn-danger">More
                                </button>
                            </ul>
                    )
                }

            </div>
        );
    }
}

export default MainComponent;
