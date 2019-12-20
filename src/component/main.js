import React, {Component} from 'react';
import { Switch, Link } from 'react-router-dom'

class Main extends Component{
    render(){
        return(
            
            <Switch>
                <Link path='/aboutme'>Home Page</Link>/>
            </Switch>
        )
    }
}

export default Main;