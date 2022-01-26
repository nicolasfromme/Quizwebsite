import React from 'react';

import App from './App'
import impressum from './impressum';
import datenschutz from './datenschutz';
import mainpage from './mainpage'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class ElementHandler extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={mainpage}></Route>
                <Route exact path="/impressum" component={impressum}></Route>
                <Route exact path="/datenschutzerklaerung" component={datenschutz}></Route>
            </Switch>
            )
    }
   
}

export default ElementHandler;
