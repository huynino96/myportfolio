import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
  <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/">Huy Ho</Link>} scroll>
            <Navigation>
                
                <Link to="/blog">Blogs</Link>
                <Link to="/project">Project</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color:'black'}} to="/">Home</Link>}>
            <Navigation>
                <Link to="/blog">Blogs</Link>
                <Link to="/project">Project</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

  );
}

export default App;
