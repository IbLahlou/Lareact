import React from 'react'
import { Link } from 'react-router-dom';
//import Register from './Register'
class Navbar extends React.Component {
    constructor( ){
        super()
        this.state={}
    }

    logout = () => {
        console.log('logout')
    }

    render() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Lareact</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                {
                    localStorage.getItem('token')
                    ?
                    <>
                    <li class="nav-item active">
                       <Link class="nav-link" to="/pictures/new">Poster une photo </Link>
                   </li>
                   <li class="nav-item">
                     <button class="btn" onClick={() => this.logout}>Déconnexion</button>
                   </li>
                   </>
                    :
                    <>
                     <li class="nav-item active">
                        <Link class="nav-link" to="/login">Connexion </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/register" >Inscription</Link>
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