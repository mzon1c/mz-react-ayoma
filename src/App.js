import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
      super();
      this.state={count:0};

    }




    increment=() =>{this.setState({ count:this.state.count+1});}

    render(){
      var x,y;
      var pathArray = window.location.pathname.split( '/' );
      if(pathArray[1]==="")
      x="selected";
      else if(pathArray[1]==="second")
      y="selected";
      return(


         <div>


      <ul id="navigation">
        <li class={x}>
          <a href="/">Home</a>
        </li>
        <li class={y}>
          <a href="/second">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
      </div>

      );


    }


}





export default App;
