import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';
import './normalize.css';
import './products.css';
import './js/font-awesome.min.css';

class Products extends Component {

    constructor(){
      super();
      this.state={count:0};



    }





    render(){

      function select() {
        document.getElementById('main-menu').className="sub-menu active";

      }

      function expand(){

        document.getElementById('main-menu').className="sub-menu active";



      }

      function close(){

        document.getElementById('main-menu').className="sub-menu";

      }

      return(


        <div class="container">



  	<ul class="puerto-menu">
  		<li>
  			<a href="#">


  					<strong>Printers</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a href="#" class="active">


  					<strong>Lamination Machine</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a href="#">


  					<strong>Paper Cutter</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a href="#">


  					<strong>T-Shirt/Mug</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a href="#" class="hover">


  					<strong>ID Card Products</strong>
  					<small>...</small>

  			</a>
  			<ul>
  				<li><a href="#">Mission</a></li>
  				<li>
  					<a href="#" class="hover">Our Team</a>
  					<ul>
  						<li><a href="#">Leyla Sparks</a></li>
  						<li>
  							<a href="#" class="hover">Gleb Ismailov</a>
  							<ul>
  								<li><a href="#">About</a></li>
  								<li><a href="#">Skills</a></li>
  							</ul>
  						</li>
  						<li><a href="#">Viktoria Gibbers</a></li>
  					</ul>
  				</li>
  				<li><a href="#">Rewards</a></li>
  				<li><a href="#">Certificates</a></li>
  			</ul>
  		</li>
  		<li>
  			<a href="#">


  					<strong>Cleaning Tissue</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a href="#">


  					<strong>Inks</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a class="search">
  				<input type="text" value="search ..."/>
  				<button><i class="fa fa-search"></i></button>
  			</a>
  		</li>
  	</ul>

  </div>

      );


    }


}





export default Products;
