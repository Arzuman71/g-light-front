import React, {Component} from 'react';
import 'react-materialize';
import 'materialize-css';
import '../main.css';
import ItemService from "../services/ItemService";


class ItemDetailsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            item: '',
            user: '',
            car: '',
            preference: ''

        }
    }


    componentDidMount() {
        ItemService.getItemById(this.state.id).then((res) => {
            this.setState({item: res.data})
            this.setState({car: res.data.car})
            this.setState({user: res.data.user})
            this.setState({preference: res.data.user.preference})
        });
    }


    render() {
        return (
            <div>
                {this.state.user.picUrl ? (
                    <img
                        src={'http://localhost:8080/image/' + this.state.user.picUrl}
                    />
                ) : null}

                <h4>{this.state.user.name} {this.state.user.surname}</h4>
                <h4>{this.state.user.gender} {this.state.user.age}</h4>
                <h4>Email - {this.state.user.email}</h4>
                <h4>phoneNumber - {this.state.user.phoneNumber}</h4>
                <h4>{this.state.user.about}</h4>
                <h5>speak - {this.state.preference.speak}</h5>
                <h5>smoke - {this.state.preference.smoke}</h5>
                <h5>withAnimals - {this.state.preference.withAnimals}</h5>
                <h5>music - {this.state.preference.music}</h5>

                <h3>item</h3>
                <h4>outset - {this.state.item.outset} - {this.state.item.end}</h4>
                <h4>{this.state.item.startDate}</h4>
                <h4>{this.state.item.type} : price - {this.state.item.price}</h4>
                <h4>{this.state.item.numberOfPassengers}</h4>
                <h5>{this.state.item.createdDate}</h5>

                {//     <h3>car</h3>
                 //   {
                 //       this.state.car.picUrl ? (
                 //           <img
                 //               src={'http://localhost:8080/image/' + this.state.car.picUrl}
                 //           />
                 //       ) : null
                 //   }
                 //   <h5>{this.state.car.carBrand}</h5>
                 //   <h5>{this.state.car.carType}</h5>
                 //   <h5>{this.state.car.carModel}</h5>
                 //   <h5>{this.state.car.carNumber}</h5>
                 //   <h5>{this.state.car.color}</h5>
                 //   <h5>{this.state.car.year}</h5>
                }

            </div>
        );
    }
}

export default ItemDetailsComponent;
