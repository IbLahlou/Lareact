import React, { PureComponent } from 'react'

export default class Login extends PureComponent {
  //Constructeur
  constructor(){
    super()
    this.state ={

    }
  }
  
    render() {
    return (
      <>
        <form methode="POST">
            <input type="text" name='email' placeholder='Votre email'/>
            <input type="password" name='password' placeholder='Votre mot de passe'/>
            <button type='submit'>Me connecter</button>
        </form>
      </>
    )
  }
}
