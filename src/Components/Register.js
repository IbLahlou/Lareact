
import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

 class Register extends React.Component {
    constructor(){
        super();
        this.state={
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            redirect: false,
            errors : []
        }
    }


    componentWillMount(){
      if(localStorage.getItem('token')){
        this.setState({redirect : true})
      }
    }

    handelNameChange = event => {
      this.setState({name : event.target.value}, () =>{
        console.log(this.state)
      })
    }

    handelEmailChange = event => {
      this.setState({email : event.target.value}, () =>{
        console.log(this.state)
      })
    }

    handelPasswordChange = event => {
      this.setState({password : event.target.value}, () =>{
        console.log(this.state)
      })
    }

    handelConfirmPasswordChange = event => {
      this.setState({confirm_password : event.target.value}, () =>{
        console.log(this.state)
      })
    }

    handelSubmit = event =>{
      event.preventDefault()
      console.log('inscription')

      let bodyFormData = new FormData()
      bodyFormData.set('name',this.state.name)
      bodyFormData.set('email',this.state.email)
      bodyFormData.set('password',this.state.password)
      bodyFormData.set('confirm_password',this.state.confirm_password)

      axios.post('http://127.0.0.1:8000/api/register',bodyFormData)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token',res.data.api_token)
          this.setState({redirect : true});
        })
        .catch(error => {
          if(error.response.status === 401){
            this.setState({errors : error.response.data.errors},() => {
             console.log(this.state)
            })
       }
       console.log(error.response)
        })
    }

  render() {
    if(this.state.redirect){
      return (<Navigate to="/"/>)
    }
    return (
      <>
     <Navbar />
     <div className="container w-50">
      <h2 className="text-center my-5">Inscription</h2>
       <form method="POST" onSubmit={this.handelSubmit}>
         <div className="form-group">
            <label for="exampleInputEmail1">Nom</label>
            <input onChange={this.handelNameChange} type="text" className={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid":""}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
            { this.state.errors && this.state.errors.name ?  <div className="text-danger invalide-feedback">{this.state.errors['name']}</div> :  ''}
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Adresse Email</label>
            <input onChange={this.handelEmailChange} type="email" className={`form-control ${this.state.errors && this.state.errors.email ? "is-invalid":""}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small  id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            { this.state.errors && this.state.errors.email ?  <div className="text-danger invalide-feedback">{this.state.errors['email']}</div> :  ''}
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Mot de passe</label>
            <input onChange={this.handelPasswordChange} type="password" className={`form-control ${this.state.errors && this.state.errors.password ? "is-invalid":""}`} id="exampleInputPassword1" />
            { this.state.errors && this.state.errors.password ?  <div className="text-danger invalide-feedback">{this.state.errors['password']}</div> :  ''}
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Confirmation du mot de passe</label>
            <input onChange={this.handelConfirmPasswordChange} type="password" className={`form-control ${this.state.errors && this.state.errors.confirm_password ? "is-invalid":""}`} id="exampleInputPassword1" />
            { this.state.errors && this.state.errors.confirm_password ?  <div className="text-danger invalide-feedback">{this.state.errors['confirm_password']}</div> :  ''}
          </div>

          <button type="submit" className="btn btn-primary">M'inscrire</button>
       </form>
      </div>
      </>
    )
  }
}

export default Register;
