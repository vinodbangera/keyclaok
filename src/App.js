import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import Welcome from './Welcome';
import Secured from './Secured';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">       
        <h1><Link to="/">Home Page</Link></h1>
        <button><Link to="/secured" className='link'>Signin</Link></button>
        <Route exact path="/" component={Welcome} />
        <Route path="/secured" component={Secured} />
      </div>
    </BrowserRouter>
  );
}

export default App;
