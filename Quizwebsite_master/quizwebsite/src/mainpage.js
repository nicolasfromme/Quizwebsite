import Testbody from './quiz1.js';
import Arbeitslosengeld from './Arbeitslosengeld.js';
import Kleingewerbe from './Kleingewerbe.js'

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

import './stylesheets/quiz.css'

import './stylesheets/mainpage.css';

import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'


import {Avatar} from '@material-ui/core'

import svg from './images/svg.png'

class mainpage extends React.Component {  
    constructor(probs) {
      super(probs);
      
      this.testbody = new Testbody();
      
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col class="col-lg">
                        <hr id="spacer"/>
                        <h1 id="heading">Deine Anträge, <br /> unsere Arbeit.</h1>
                        
                        <p id="subheading1">Anträge jeglicher Art sind wichtig für uns alle. <br />Noch wichtiger ist uns aber deine Zeit! Gib <br/> deine Daten ein, wir übernehemn den Rest für dich!</p>
                        <p id="subheading2">Schnell, unkompliziert & sicher deine Anträge erledigen.</p>
                        <p id="bewertungheader"><b><ArrowForwardIosIcon id="fordwardicon"/> Das sagen unsere Kunden</b></p>
                        <div id="bewertung">
                            <Avatar id="avatar" alt="Nico" /> 
                            <div id="stars">
                                <StarIcon id="star"/> <StarIcon id="star"/> <StarIcon id="star"/> <StarIcon id="star"/> <StarBorderIcon id="star"/>
                            </div>
                            <p id="bewertungtext">"Exzellenter Service. Nur zu empfehlen"</p>
                            <span id="dreieck"></span>
                        </div>
                    </Col>
                    <Col id="svgCol">
                        <img id="svg" src={svg}/>
                    </Col>
                </Row>
                <Row>
                    <Col id="sec2">
                        <h1 id="sec2-h1">Finde jetzt heraus ob du Anspruch auf Bafög hast!</h1>
                        <Testbody />
                    </Col>
                </Row>
                <Row>
                    <Col id="sec2">
                        <h1 id="sec2-h1">Finde jetzt heraus ob du Anspruch auf Arbeitslosengeld hast hast!</h1>
                        <Arbeitslosengeld />
                    </Col>
                </Row>
                <Row>
                    <Col id="sec2">
                        <h1 id="sec2-h1">Kleingewerbe</h1>
                        <Kleingewerbe />
                    </Col>
                </Row>  
            </Container>
            )
    }
}

export default mainpage;

       