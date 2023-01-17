import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

class PostArticle extends React.Component {
  constructor(){
    super()
    this.state = {
        title: '',
        description: '',
        image: '',
        redirect: false
      }
    }

  handelTitleChange = event => {
    this.setState({title : event.target.value}, () =>{
      console.log(this.state)
    })
  }

  handelDescriptionChange = event => {
    this.setState({description : event.target.value}, () =>{
      console.log(this.state)
    })
  }

  handelImageChange = event => {
    console.log(event.target.files)
    this.setState({image : event.target.files[0]}, () =>{
      console.log(this.state)
    })
  }

  handelSubmit = event =>{
    event.preventDefault()

    let bodyFormData = new FormData()
    bodyFormData.set('title',this.state.title)
    bodyFormData.set('description',this.state.description)
    bodyFormData.set('image',this.state.image)

    let headers = {
      headers :{
        'API_TOKEN' : localStorage.getItem('token')
      }
    }

    axios.post('http://127.0.0.1:8000/api/pictures',bodyFormData,headers)
    .then(res => {
      
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
        <Navbar/>
        <div className="container w-50">
            <h2 className="text-center my-5">Ajouter une nouvelle photo</h2>
            <form method="POST" onSubmit={this.handelSubmit} encType="multipart/form-data">

                <div className="form-group">
                    <label for="exampleInputEmail1">Titre</label>
                    <input onChange={this.handelTitleChange} type="text" className={`form-control ${this.state.errors && this.state.errors.title ? "is-invalid":""}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    { this.state.errors && this.state.errors.title ?  <div className="text-danger invalide-feedback">{this.state.errors['title']}</div> :  ''}
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <textarea onChange={this.handelDescriptionChange} className={`form-control ${this.state.errors && this.state.errors.description ? "is-invalid":""}`}  id="exampleFormControlTextarea1" rows="3"></textarea>
                    { this.state.errors && this.state.errors.description ?  <div className="text-danger invalide-feedback">{this.state.errors['description']}</div> :  ''}
                </div>
                
                <div className="form-group">
                    <label for="exampleFormControlFile1">Image</label>
                    <input onChange={this.handelImageChange} type="file" className={`form-control-file ${this.state.errors && this.state.errors.image ? "is-invalid":""}`}  id="exampleFormControlFile1"/>
                    { this.state.errors && this.state.errors.image ?  <div className="text-danger invalide-feedback">{this.state.errors['image']}</div> :  ''}
                </div>
                
                { this.state.errors && this.state.errors === 'Bad_credentials' ? <div className="alert alert-warning">Vos identifiants de connexion sont incorrects !</div>: ""}

                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
      </>
    )
  }
}

export default PostArticle;