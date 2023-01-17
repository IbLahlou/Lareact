import React from 'react'
import { Link } from 'react-router-dom';
//import Register from './Register'
class Navbar extends React.Component {
    constructor( ){
        super()
        this.state={
            token: null
        }
    }

    logout = () => {
        localStorage.setItem('token', '')
        localStorage.clear()
        this.setState({token : null})
    }

    render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Lareact</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                {
                    localStorage.getItem('token')
                    ?
                    <>
                    <li className="nav-item active">
                       <Link className="nav-link" to="/pictures/new">Poster une photo </Link>
                   </li>
                   <li className="nav-item">
                     <button className="btn" onClick={() => this.logout()}>Déconnexion</button>
                   </li>
                   </>
                    :
                    <>
                     <li className="nav-item active">
                        <Link className="nav-link" to="/login">Connexion </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register" >Inscription</Link>
                    </li>
                    </>
                }
                </ul>
            </div>
        </nav>
        </>
    )
  }
}

export default Navbar;