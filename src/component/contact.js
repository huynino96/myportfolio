import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Huy Ho</h2>
                        <img src="https://i.pinimg.com/originals/2a/40/ec/2a40ec0333897aa3309ffbfd5bff47d5.jpg" alt="avatar" style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Hello World!!! My name is Huy</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'16px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>+84 90 999 1429
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'16px', fontFamily:'Anton'}}>
                                    <i class="fa fa-map" aria-hidden="true"/>201 Nguyen Thien Thuat, Dist 3, Saigon, Vietnam
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'16px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>tuanhuy0496@yahoo.com.vn
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;