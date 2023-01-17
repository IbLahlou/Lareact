import axios from 'axios';
import React from 'react'
import { Navigate } from 'react-router-dom';




export default class Picture extends React.Component {

    constructor(){
        super()
        this.state={
          redirect:false
        }
    }

    componentDidMount(){
      if (localStorage.getItem('TOKEN')){
        let id=this.props.matches.params.id
        let headers ={
          headers : {
            'API-TOKEN' :localStorage.getItem('TOKEN')
          }
        }

        axios.get(`http://127.0.0.1:8000/api/pictures/${id}`,headers)
        .then(res => {
          console.log(res)
        })
        .catch(error =>{
          console.log(error.response)
        })
      } 
      else{
          this.setState({redirect:true})
      }

    }

  render() {
    if(this.state.redirect){
      return (<Navigate to="/"/>)
    }
    return (


        <>
      <div>Picture</div>
      Photo
      </>
    )
  }
}
