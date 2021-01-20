import React, {Component} from 'react';
import UserService from '../services/UserService';
import '../App.css';
import flatpickr from "flatpickr";

class UserEditComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            age: '',
            about: '',
            gender: '',
            picUrl: ''
        }
        this.edit = this.edit.bind(this);
        this.datePicker = React.createRef();

    }

    componentDidMount() {
        UserService.getUser().then((res) => {
            this.setState({name: res.data.name})
            this.setState({surname: res.data.surname})
            this.setState({age: res.data.age})
            this.setState({about: res.data.about})
            this.setState({gender: res.data.gender})
        });

        flatpickr(this.datePicker.current, {
            onChange: this.onChange
        });

    }

    edit = (e) => {
        e.preventDefault();
        let user = {
            name: this.state.name, surname: this.state.surname,
            about: this.state.about, age: this.state.age,
            gender: this.state.gender
        };
        UserService.dataChange(user).then(() => {
            this.props.history.push('/user');
        });
    }

    onChange = (selectedDates, dateStr, instance) => {
        this.setState({age: dateStr})
    }
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeSurnameHandler = (event) => {
        this.setState({surname: event.target.value});
    }
    aboutHandler = (event) => {
        this.setState({about: event.target.value});
    }
    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value});
    }
    fileHandler = (event) => {
        this.setState({picUrl: event.target.files[0]});
    }
    function = (event) => {

        const file = this.state.picUrl[0];
        console.log(file);

        const formData = new FormData();
        formData.append('file', file);

        UserService.changeAvatar(formData).then(() => {
            console.log("File uploaded successfully")
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="rov">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Edit</h3>
                        <div className="form-grup">
                            <form>
                                <libel> Name:</libel>
                                <input type="file" name="name" className="form-control"
                                       onChange={this.fileHandler}/>
                            </form>
                            <button className="btn btn-success" onClick={this.fileUploadHandler}> file upload</button>

                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-grup">
                                    <libel> Name:</libel>
                                    <input placeholder="Name" name="name" className="form-control"
                                           value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> Surname: </label>
                                    <input placeholder="Surname" name="surname" className="form-control"
                                           value={this.state.surname} onChange={this.changeSurnameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> About: </label>
                                    <input type="textarea" name="about" className="form-control"
                                           value={this.state.about} onChange={this.aboutHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> gender: </label>
                                    <select defaultValue={this.state.gender} name="gender" className="form-control"
                                            value={this.state.selectValue}
                                            onChange={this.changeGenderHandler}>
                                        <option value="DEFAULT" disabled>{this.state.gender}</option>
                                        <option value="MALE">MALE</option>
                                        <option value="FEMALE">FEMALE</option>
                                    </select>
                                </div>
                                <div className="input-field third-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                        </svg>
                                    </div>
                                    <input min="2019-01-01"
                                           ref={this.datePicker} className="datepicker"
                                           id="return" name="dateFrom" placeholder={this.state.age}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={this.edit}> edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default UserEditComponent;
