import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://i.pinimg.com/originals/2a/40/ec/2a40ec0333897aa3309ffbfd5bff47d5.jpg" alt="avatar" style={{height: '200px'}}/>

                        </div>
                        <h2 style={{paddingTop: '2em'}}>Huy Ho</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum е елементарен примерен текст, използван в печатарската 
                            и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато 
                            неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с
                             примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания 
                             като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи
                             , съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, 
                             който включва различни версии на Lorem Ipsum.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>201 Nguyen Thien Thuat</p>
                        <h5>Phone</h5>
                        <p>090 999 1429</p>
                        <h5>Email</h5>
                        <p>tuanhuy0496@yahoo.com.vn</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;