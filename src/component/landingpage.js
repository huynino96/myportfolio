import React, {Component} from 'react';
import{Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_960_720.png" alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Full-Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | React/Redux | NodeJS | VueJS | Java | Python</p>
                            <div className="social-links">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/huy.ho.09" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook" aria-hidden="true"/>
                                </a>

                                 {/* Instagram */}
                                 <a href="https://www.instagram.com/huyho09/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/huynino96/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                            
                            </div>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Landing;