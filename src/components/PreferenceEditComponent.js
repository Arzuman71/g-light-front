import React, {Component} from 'react';
import UserService from '../services/UserService';
import '../App.css';
import PreferenceService from "../services/PreferenceService";

class PreferenceEditComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            speak: '',
            smoke: '',
            withAnimals: '',
            music: ''
        }
        this.edit = this.edit.bind(this);

    }

    componentDidMount() {
        PreferenceService.getPreference().then((res) => {
            this.setState({speak: res.data.speak})
            this.setState({smoke: res.data.smoke})
            this.setState({withAnimals: res.data.withAnimals})
            this.setState({music: res.data.music})
        });

    }

    edit = (e) => {
        e.preventDefault();
        let preference = {
            speak: this.state.speak, smoke: this.state.smoke,
            withAnimals: this.state.withAnimals,
            music: this.state.music
        };
        PreferenceService.change(preference).then(() => {
            this.props.history.push('/user');
        });
    }

    speakHandler = (event) => {
        this.setState({speak: event.target.value});
    }
    smokeHandler = (event) => {
        this.setState({smoke: event.target.value});
    }
    withAnimalsHandler = (event) => {
        this.setState({withAnimals: event.target.value});
    }
    musicHandler = (event) => {
        this.setState({music: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="rov">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Preference</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> speak: </label>
                                        <select defaultValue={this.state.speak} name="speak" className="form-control"
                                                value={this.state.selectValue}
                                                onChange={this.speakHandler}>
                                            <option value="DEFAULT" disabled>{this.state.speak}</option>
                                            <option value="AGAINST">AGAINST</option>
                                            <option value="SOMETIMES">SOMETIMES</option>
                                            <option value="AGREE">AGREE</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label> smoke: </label>
                                        <select defaultValue={this.state.smoke} name="smoke" className="form-control"
                                                value={this.state.selectValue}
                                                onChange={this.smokeHandler}>
                                            <option value="DEFAULT" disabled>{this.state.smoke}</option>
                                            <option value="AGAINST">AGAINST</option>
                                            <option value="SOMETIMES">SOMETIMES</option>
                                            <option value="AGREE">AGREE</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label> withAnimals: </label>
                                        <select defaultValue={this.state.withAnimals} name="withAnimals"
                                                className="form-control"
                                                value={this.state.withAnimals}
                                                onChange={this.smokeHandler}>
                                            <option value="DEFAULT" disabled>{this.state.withAnimals}</option>
                                            <option value="AGAINST">AGAINST</option>
                                            <option value="SOMETIMES">SOMETIMES</option>
                                            <option value="AGREE">AGREE</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label> music: </label>
                                        <select defaultValue={this.state.music} name="withAnimals"
                                                className="form-control"
                                                value={this.state.selectValue}
                                                onChange={this.musicHandler}>
                                            <option value="DEFAULT" disabled>{this.state.music}</option>
                                            <option value="AGAINST">AGAINST</option>
                                            <option value="SOMETIMES">SOMETIMES</option>
                                            <option value="AGREE">AGREE</option>
                                        </select>
                                    </div>

                                    <button className="btn btn-success" onClick={this.edit}> edit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PreferenceEditComponent;
