import React, { PureComponent } from 'react'

export default class Car extends PureComponent {
    //Constructeur
    constructor(props){
        super(props)
        this.state ={
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1964
        }
      }

      //Methode 
      changeColor = () => {
        this.setState({color : "blue"}, () =>{
            console.log(this.state.color);
        })
        
      }

      componentDidMount(){
        this.setState({color : "green"})
      }

      //La Methode render
    render() {
        return (
        <>
            <h1>My {this.state.brand}</h1>
            <p>
                It is a {this.state.color} {this.state.model} from {this.props.year};
            </p>
            <button type="button" onClick={this.changeColor}>Change Color</button>
        </>
        )
  }
}
