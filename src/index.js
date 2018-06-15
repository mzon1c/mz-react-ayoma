import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import Ahome from './Ahome';
import  {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
 <BrowserRouter>
   <div>
   <Route exact path='/' component={App} />
   <Route path='/second' component={App} />
   </div>
</BrowserRouter>,
 document.getElementById('root'));
 var x,y;
 var pathArray = window.location.pathname.split( '/' );
 if(pathArray[1]==="")
  {
    ReactDOM.render(<Ahome/>,document.getElementById('contents'));
    ReactDOM.render(<App2/>,document.getElementById('footer'));
  }
 else if(pathArray[1]==="second")
  {
    ReactDOM.render(<Ahome/>,document.getElementById('contents'));
    ReactDOM.render(<App2/>,document.getElementById('footer'));
  }
