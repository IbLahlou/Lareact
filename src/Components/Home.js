import React from 'react'
import Navbar from './Navbar';


class Home extends React.Component {
    constructor(){
        super()
        this.state ={}
    }
  render() {
    return (
      <>
        <Navbar/>
        <div class="jumbotron">
            <h1 class="display-4">IDLareact</h1>
            <p class="lead">Look it 's just an ordinary Website it's just for a pedagogic purpose not for work </p>
            <hr class="my-4"/>
            <p>It's Created with React js a framework of javascript using component to navigate and connect and validate informations with a Laravel API a framework of PHP with Axios </p>

        </div>
      </>
    )
  }
}

export default Home;

