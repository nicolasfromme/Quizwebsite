import './App.css';
import Testbody from './quiz1.js';
import ElementHandler from './ElementHandler.js'

import React from 'react';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import impressum from './impressum';

import {Link} from 'react-router-dom'

import logo from './images/logo-svg.svg'







class App extends React.Component {  
  constructor(probs) {
    super(probs);
    
    this.testbody = new Testbody();
    
  }


  state = {
    data: null
  };

  
    // fetching the GET route from the Express server which matches the GET route from server.js
  
    callBackendAPI = () => { // funktioniert
    axios.get('/api')
    .then(res => {
      console.log(res.data)
    })

  };

  
  

  postData = () => { 
    console.log("fhjkds")
    const d2 = "Hello"
    const data = {d2}
    axios.post("http://localhost:5000/api", data)
}


  componentDidMount(){
    //this.callBackendAPI()
    this.postData()

  };



  render() {
    return (
      <Container>
        
        <nav id="nav" class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#" ><Link id="navlink-main" to="/"><img id="logo" alt="Schreibfeder" src={logo}/></Link></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link class="nav-item nav-link" id="navlink-main" to="/">Home</Link>
              <a class="nav-item nav-link" id="navlink-main" href="#">Angebote</a>
              <a class="nav-item nav-link" id="navlink-main" href="#">Preise</a>
              <Link class="nav-item nav-link" id="navlink-main" to="/datenschutzerklaerung">Datenschutz</Link>
              <Link class="nav-item nav-link" id="navlink-main" to="/Impressum">Impressum</Link>
              
            </div>
          </div>
        </nav>




        
            
        <ElementHandler />
        <h1 class="test">{this.state.data}</h1>

        <footer>
          <div class="text-center p-4" id="footer">
            <p>© 2021 Copyright: Testseite</p>
            <Link id="footerlinks" to="/impressum">Impressum</Link>
            <Link id="footerlinks" to="/datenschutzerklaerung">Datenschutzerklärung</Link>
          </div>
        </footer>
      </Container>
      
    );
  }
}


export default App;
