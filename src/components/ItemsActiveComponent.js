import React, {Component} from 'react';
import ItemService from "../services/ItemService";

class ItemsActiveComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.home = this.home.bind(this);
        this.Archived = this.Archived.bind(this);
        this.change = this.change.bind(this);
    }

    componentDidMount() {
        ItemService.itemsActive().then((response) => {
            this.setState({items: response.data})
        });
    }

    Archived(id) {
        ItemService.changeArchived(id).then(res => {
            this.setState({items: this.state.items.filter(item => item.id !== id)});
        });
    }

    change(id) {
        this.props.history.push(`/item/edit/${id}`);
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

                                    <td>
                                        <button style={{margin: "10px"}} onClick={() => this.Archived(item.id)}
                                                className="btn btn-danger">Archived
                                        </button>
                                    </td>
                                    <td>
                                        <button style={{margin: "10px"}} onClick={() => this.change(item.id)}
                                                className="btn btn-danger">change
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

export default ItemsActiveComponent;
