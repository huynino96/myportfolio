import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };

    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    {/* Input your Projetc here */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/react/logo-og.png) center / cover' }}>React Project 1</CardTitle>
                        <CardText>
                            This is my React Project about an E-commerce Website
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>View Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is HTML5</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>HTML5</Tab>

                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                
            </div>
        )
    }
}

export default Project;