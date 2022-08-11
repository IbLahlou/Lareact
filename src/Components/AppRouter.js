import React, { Component } from 'react'
import {
    Routes,
    Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Register from './Register'

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes> 
    )
  }
}
