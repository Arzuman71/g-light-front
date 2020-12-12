import React, {Component} from 'react';
import flatpickr from 'flatpickr';
import Choices from 'choices.js';
import 'react-materialize';
import 'materialize-css';
import '../main.css';
import MainService from "../services/MainService";


class MainItemsComponent extends Component {

    constructor(props) {
        console.log('props' + props.name)
        super(props)
        this.state = {
            items: props.name
        }
    }


    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <td> Name</td>
                        <td> Date</td>
                        <td> Deadline</td>
                        <td> Hours</td>
                        <td> Delete</td>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map(
                            item =>
                                <tr key={item.id}>
                                    <td> {item.outset}</td>
                                    <td> {item.end}</td>
                                    <td> {item.startDate}</td>
                                    <td> {item.price}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MainItemsComponent;
