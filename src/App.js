import React from 'react';
import Nav from './components/main/nav';
import './App.css';
import Main from './components/main/main';
import SignIn from './components/players/signin';
import CreateLive from './components/events/createLive';
import SignUp from './components/players/signup';
import EventDetails from './components/events/eventDetails';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route
        exact path="/"
        render={
          props => {
            return (
              <>
                <Nav  {...props}/>
                <Main {...props}/>
              </>
            )
          }
        } 
      />
      <Route
        exact path="/eventDetails/:eventId"
        render={
          props => {
            return (
              <>
                <Nav  {...props}/>
                <EventDetails  {...props}/>
              </>
            )
          }
        } 
      />
      <Route
        exact path="/signin"
        render={
          props => {
            return (
              <>
                <SignIn  {...props}/>
              </>
            )
          }
        } 
      />
      <Route
        exact path="/createLive"
        render={
          props => {
            return (
              <>
                <CreateLive  {...props}/>
              </>
            )
          }
        } 
      />
      <Route
        exact path="/signup"
        render={
          props => {
            return (
              <>
                <SignUp  {...props}/>
              </>
            )
          }
        } 
      />
    </div>
  );
}

export default App;
