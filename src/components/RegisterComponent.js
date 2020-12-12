import React, { Component } from 'react';
import UserService from '../services/UserService';
import '../App.css';

class RegisterComponent extends Component {

   constructor(props) {
      super(props)

      this.state = {
         // id: this.props.match.params.id,
         name: '',
         surname: '',
         password: '',
         confirmPassword: '',
         email: '',
         gender: ''
      }
      this.saveUser = this.saveUser.bind(this);
   }


   saveUser = (e) => {
      e.preventDefault();
      let user = {
         name: this.state.name, surname: this.state.surname,
         email: this.state.email, password: this.state.password,
         confirmPassword: this.state.confirmPassword, gender: this.state.gender
      };
      UserService.register(user).then(() => {
         this.props.history.push('/');
      });
   }
   
   changeNameHandler = (event) => {
      this.setState({ name: event.target.value });
   }
   changeSurnameHandler = (event) => {
      this.setState({ surname: event.target.value });
   }
   changeEmailHandler = (event) => {
      this.setState({ email: event.target.value });
   }
   changePasswordHandler = (event) => {
      this.setState({ password: event.target.value });
   }
   changeConfirmPasswordHandler = (event) => {
      this.setState({ confirmPassword: event.target.value });
   }
   changeGenderHandler = (event) => {
      this.setState({ gender: event.target.value });
   }
   render() {
      return (
         <div>
            <div className="container">
               <div className="rov">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                     <h3 className="text-center">Register</h3>
                     <div className="card-body">
                        <form >
                           <div className="form-grup">
                              <libel> Name: </libel>
                              <input placeholder="Name" name="name" className="form-control"
                                 value={this.state.name} onChange={this.changeNameHandler} />
                           </div>
                           <div className="form-group">
                              <label> Surname: </label>
                              <input placeholder="Surname" name="surname" className="form-control"
                                 value={this.state.surname} onChange={this.changeSurnameHandler} />
                           </div>
                           <div className="form-group">
                              <label> Email: </label>
                              <input type="email" placeholder="Email" name="email" className="form-control"
                                 value={this.state.email} onChange={this.changeEmailHandler} />
                           </div>
                           <div className="form-group">
                              <label> Password: </label>
                              <input type="password" name="password" className="form-control"
                                 value={this.state.password} onChange={this.changePasswordHandler} />
                           </div>
                           <div className="form-group">
                              <label> ConfirmPassword: </label>
                              <input type="password" name="confirmPassword" className="form-control"
                                 value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler} />
                           </div>
                           <div className="form-group">
                              <label> gender: </label>
                              <select defaultValue={'DEFAULT'} name="gender" className="form-control" value={this.state.selectValue}
                                 onChange={this.changeGenderHandler} >
                                 <option value="DEFAULT" disabled>Choose a gender</option>
                                 <option value="MALE">MALE</option>
                                 <option value="FEMALE">FEMALE</option>
                              </select>
                           </div>
                           <button className="btn btn-success" onClick={this.saveUser}> Register </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}


export default RegisterComponent;