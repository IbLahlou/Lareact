import React, { Component } from 'react'
import {
    Routes,
    Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import PostArticle from './PostPicture'
import Register from './Register'
import Picture from './Picture'

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pictures/new" element={<PostArticle/>}/>
        <Route path="/pictures/:id" element={<Picture/>}/>
      </Routes> 
    )
  }
}
