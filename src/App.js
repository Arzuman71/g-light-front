import React from 'react';
import './App.css';
//import './main.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RegisterComponent from './components/RegisterComponent';
import MainComponent from './components/MainComponent';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import SaveCarComponent from './components/SaveCarComponent';
import ItemDetailsComponent from "./components/ItemDetailsComponent";
import CarsComponent from "./components/CarsComponent";
import CarEditComponent from "./components/CarEditComponent";
import ForgotPassComponent from "./components/ForgotPassComponent";
import ForgotPasswordChangeComponent from "./components/ForgotPasswordChangeComponent";
import ForgotPasswordResetComponent from "./components/ForgotPasswordResetComponent";
import PasswordEditComponent from "./components/PasswordEditComponent";
import UserEditComponent from "./components/UserEditComponent";
import PreferenceEditComponent from "./components/PreferenceEditComponent";
import ItemAddComponent from "./components/ItemAddComponent";
import ItemsArchivedComponent from "./components/ItemsArchivedComponent";
import ItemsActiveComponent from "./components/ItemsActiveComponent";
import ItemEditComponent from "./components/ItemEditComponent";

function App() {
    return (
        <div>
            <Router>
                <Route exact component={HeaderComponent}/>
                <Route path="/" exact component={MainComponent}/>
                <Route path="/car/add" component={SaveCarComponent}/>
                <Route path="/cars" component={CarsComponent}/>
                <div className="container">
                    <Switch>
                        <Route path="/user/auth" exact component={LoginComponent}/>
                        <Route path="/reestablish" component={ForgotPassComponent}/>
                        <Route path="/userRegister" component={RegisterComponent}/>
                        <Route path="/user" exact component={HomeComponent}/>
                        <Route path="/items/active" exact component={ItemsActiveComponent}/>
                        <Route path="/items/archived" exact component={ItemsArchivedComponent}/>
                        <Route path="/item/details/:id" component={ItemDetailsComponent}/>
                        <Route path="/user/forgotPassword/reset" exact component={ForgotPasswordResetComponent}/>
                        <Route path="/car/edit/:id" component={CarEditComponent}/>
                        <Route path="/item/edit/:id" component={ItemEditComponent}/>
                        <Route path="/user/edit" component={UserEditComponent}/>
                        <Route path="/preference/edit" component={PreferenceEditComponent}/>
                        <Route path="/password/edit" component={PasswordEditComponent}/>
                        <Route path="/user/forgotPassword/change" exact component={ForgotPasswordChangeComponent}/>
                        <Route path="/item/add" component={ItemAddComponent}/>
                    </Switch>
                </div>
                {/* <FooterComponent /> */}

            </Router>
        </div>
    );
}

export default App;
