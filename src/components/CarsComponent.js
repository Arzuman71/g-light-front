import React, {Component} from 'react';
import CarService from '../services/CarService';

class CarsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carType: '',
            carBrand: '',
            carModel: '',
            carNumber: '',
            color: '',
            year: '',
            cars: []
        }
        this.home = this.home.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
        this.changeData = this.changeData.bind(this);
    }

    componentDidMount() {
        CarService.cars().then((response) => {
            this.setState({cars: response.data})
        });
    }
    deleteCar(id) {
        CarService.deleteCar(id).then(res => {
            this.setState({cars: this.state.cars.filter(car => car.id !== id)});
        });
    }

    changeData(id) {
        this.props.history.push(`/car/edit/${id}`);
    }



    home() {
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Cars</h1>
                <div className="row">
                    <button className="btn-btn-primary" onClick={this.home}>Home</button>
                </div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td> Image</td>
                        <td> Model</td>
                        <td> Number</td>
                        <td> Brand</td>
                        <td> Type</td>
                        <td> color</td>
                        <td> year</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.cars.map(
                            car =>
                                <tr key={car.id}>
                                    <td>  {car.picUrl ? (
                                        <img
                                            src={'http://localhost:8080/image/' + car.picUrl}
                                        />
                                    ) : null}</td>
                                    <td> {car.carModel}</td>
                                    <td> {car.carNumber}</td>
                                    <td> {car.carBrand}</td>
                                    <td> {car.carType}</td>
                                    <td> {car.color}</td>
                                    <td> {car.year}</td>

                                    <td>
                                        <button style={{margin: "10px"}} onClick={() => this.deleteCar(car.id)}
                                                className="btn btn-danger">X
                                        </button>
                                    </td>
                                    <td>
                                        <button style={{margin: "10px"}} onClick={() => this.changeData(car.id)}
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

export default CarsComponent;
