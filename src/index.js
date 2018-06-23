import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import Ahome from './Ahome';
import Products from './Products';
import  {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
 <BrowserRouter>
   <div>
   <Route exact path='/' component={App} />
   <Route exact path='/products' component={App} />
   <Route path='/about' component={App} />
   </div>
</BrowserRouter>,
 document.getElementById('root'));
 var x,y;
 var pathArray = window.location.pathname.split( '/' );
 if(pathArray[1]==="")
  {
    ReactDOM.render(<Ahome/>,document.getElementById('contents'));
    ReactDOM.render(<Footer/>,document.getElementById('footer'));
  }
 else if(pathArray[1]==="about")
  {
    ReactDOM.render(<Ahome/>,document.getElementById('contents'));
    ReactDOM.render(<Footer/>,document.getElementById('footer'));
  }
  else if(pathArray[1]==="products")
   {
     ReactDOM.render(<Products/>,document.getElementById('contents'));
     ReactDOM.render(<Footer/>,document.getElementById('footer'));
   }
