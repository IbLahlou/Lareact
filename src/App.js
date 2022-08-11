
import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './Components/AppRouter';


function App() {

  return (
     <>
     
        <Router>
          <AppRouter></AppRouter>
        </Router>
    </>
  );

}


export default App;
