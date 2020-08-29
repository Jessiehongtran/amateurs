import React from 'react';
import Nav from './components/nav';
import './App.css';
import Main from './components/main';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <Nav  />
      {/* <SignUp/> */}
      <Main />
      
    </div>
  );
}

export default App;
