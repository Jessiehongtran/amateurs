import React from 'react';
import Nav from './components/main/nav';
import './App.css';
import Main from './components/main/main';
import SignUp from './components/players/signup';
import CreateLive from './components/events/createLive';
import CreateProfile from './components/players/createProfile';
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
        exact path="/createProfile"
        render={
          props => {
            return (
              <>
                <CreateProfile  {...props}/>
              </>
            )
          }
        } 
      />
    </div>
  );
}

export default App;
