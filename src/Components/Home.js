import React from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(){
        super()
        this.state ={}
    }
    componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/pictures')
        .then(res=>{
          this.setState({pictures : res.data})
        })
        .catch(error =>{
          console.log(error.response)
        })
    }

  render() {
    return (
      <>
        <Navbar/>
        <div className="container my-5">
          <div className="row justify-content-center">
            {
          this.state.pictures?.map((picture)=>
          

            <div className="card mx-2 my-3" style={{ width: "350px"}}>
                <img className="card-img-top" src={`http://127.0.0.1:8000/storage/pictures/${picture.image}`} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{picture.title}</h5>
                  <p className="card-text">{picture.description}</p>
                  <Link to={`/pictures/${picture.id}`} className="btn btn-primary">En Savoir Plus</Link>
                </div>
            </div>
        )
        }
          </div>
        </div>
      </>
        
      
    )
  }



}

