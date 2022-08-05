
import { Routes , Route, Router } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome';
import Car from './Components/Car';
import Login from './Components/Login';

function App() {

  return (
    <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <link to =  "/home">
                    Home
                  </link>
                </li>
                <li>
                  <link to =  "/login">
                    Login
                  </link>
                </li>
                <li>
                  <link to =  "/car">
                    Car
                  </link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/home" component={Welcome}/>
              <Route path="/login" component={Login}/>
              <Route path="/car" component={Car}/>
            </Routes>
          </div>
          <Login />
        </Router>
    </div>
  );

}


export default App;
