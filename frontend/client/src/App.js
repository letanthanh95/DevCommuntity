import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from '../src/components/layout/Navbar'
import Landing from '../src/components/layout/Landing';
import Register from '../src/components/auth/register'
import Login from '../src/components/auth/login'
import Alert from '../src/components/layout/alert'
import Dashboard from '../src/components/dashboard/Dashboard'
import PrivateRoute from '../src/components/routing/PrivateRoute'
import {loadUser} from './action/auth'
import CreateProfile from '../src/components/profile-forms/createProfile'
import EditProfile from '../src/components/profile-forms/EditProfile'
import AddExp from '../src/components/profile-forms/AddExp'
import AddEducation from '../src/components/profile-forms/AddEducation'
import Profiles from './components/profile/Profile'
import Profile from './components/aProfile/Profile'

//Redux
import{Provider} from 'react-redux'; //combine react and redux
import store from './store'
import setAuthToken from './ultils/setAuthToken';
import Posts from './components/posts/Posts';
if(localStorage.token){
  setAuthToken(localStorage.token)
}
const  App=()=> {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
  return (
    <Provider store={store}>
     <Router>
        <>
        <Nav/>
        <Route exact path="/" component={Landing}/>
        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path="/register" component={Register}/>
            <Route   path="/login" component={Login}/>
            <Route   path="/profiles" component={Profiles}/>
            <Route   path="/profile/:id" component={Profile}/>
            <PrivateRoute  path="/dashboard" component={Dashboard}/>
            <PrivateRoute  path="/create-profile" component={CreateProfile}/>
            <PrivateRoute  path="/edit-profile" component={EditProfile}/>
            <PrivateRoute  path="/add-experience" component={AddExp}/>
            <PrivateRoute  path="/add-education" component={AddEducation}/>
            <PrivateRoute  path="/posts" component={Posts}/>
            
          </Switch>
        </section>
        </>
     </Router>
     </Provider>
  );
}

export default App;
