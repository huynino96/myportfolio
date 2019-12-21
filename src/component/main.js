import React, {Component} from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume';


const Main = () => (
    <Switch> 
        <Route exact path="/" component={Landing}/>
        <Route path="/aboutme" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/project" component={Project}/>
        <Route exact path="/resume" component={Resume}/>
    </Switch>
        

)

export default Main;