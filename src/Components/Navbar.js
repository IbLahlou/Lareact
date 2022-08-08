import React from 'react'
//import Register from './Register'
class Navbar extends React.Component {
    constructor( ){
        super()
        this.state={}
    }
    render() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Lareact</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/login">Connexion </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/register" >Inscription</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
  }
}

export default Navbar;