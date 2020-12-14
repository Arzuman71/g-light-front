import React, {Component} from 'react';
import ItemService from "../services/ItemService";

class ItemsArchivedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.home = this.home.bind(this);
        this.Active = this.Active.bind(this);
        this.change = this.change.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        ItemService.itemsArchived().then((response) => {
            this.setState({items: response.data})
        });
    }

    Active(id) {
        ItemService.changeActive(id).then(res => {
            this.setState({items: this.state.items.filter(item => item.id !== id)});
        });
    }

    change(id) {
        this.props.history.push(`/item/edit/${id}`);
    }
    delete(id) {
        ItemService.delete(id).then(res => {
            this.setState({items: this.state.items.filter(item => item.id !== id)});
        });
    }


    home() {
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <h1 className="text-center">items Active</h1>
                <div className="row">
                    <button className="btn-btn-primary" onClick={this.home}>Home</button>
                </div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td> end</td>
                        <td> outset</td>
                        <td> startDate</td>
                        <td> type</td>
                        <td> price</td>
                        <td> numberOfPassengers</td>
                        <td> car</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map(
                            item =>
                                <tr key={item.id}>
                                    <td> {item.end}</td>
                                    <td> {item.outset}</td>
                                    <td> {item.startDate}</td>
                                    <td> {item.type}</td>
                                    <td> {item.price}</td>
                                    <td> {item.numberOfPassengers}</td>
                                    <td> {item.car.carBrand}</td>

                                    <td>
                                        <button style={{margin: "10px"}} onClick={() => this.Active(item.id)}
                                                className="btn btn-danger">Active
                                        </button>
                                    </td>
                                    <td>
                                        <button style={{margin: "10px"}} onClick={() => this.change(item.id)}
                                                className="btn btn-danger">change
                                        </button>
                                    </td>
                                    <td>
                                        <button style={{margin: "10px"}} onClick={() => this.delete(item.id)}
                                                className="btn btn-danger">delete
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ItemsArchivedComponent;
