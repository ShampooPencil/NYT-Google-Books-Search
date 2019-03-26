import React, { Component } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

const NewRoute = () => {
  axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCb2VaAuuJPA0R9KQ63RUk4svve3ETKhwI')
    .then(viewBooks => {
      console.log(viewBooks);
    }).catch(
      error => { 
        console.error(error)
      });
  return (
    <div>
      <p>New Route</p>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/new" component={NewRoute} />
      </BrowserRouter>
    );



  }
}

export default App;
