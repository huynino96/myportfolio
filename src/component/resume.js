import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';

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
                        <Education
                            startYear={2012}
                            endYear={2015}
                            schoolName="My University"
                            schoolDescription="Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от de Finibus Bonorum et Malorum на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г. "
                        />
                        <Education
                            startYear={2015}
                            endYear={2020}
                            schoolName="My 2nd Degree"
                            schoolDescription="Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от de Finibus Bonorum et Malorum на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г. "
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experiences</h2>
                        <Experience 
                            startYear={2016}
                            endYear={2019}
                            jobName="First Job"
                            jobDescription="Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от de Finibus Bonorum et Malorum на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skill
                            skill="Javascript"
                            progress={100}
                        />
                        <Skill
                            skill="HTML"
                            progress={80}
                        />
                        <Skill
                            skill="CSS"
                            progress={60}
                        />
                        <Skill
                            skill="NodeJS"
                            progress={70}
                        />
                        <Skill
                            skill="PHP"
                            progress={50}
                        />
                        <Skill
                            skill="MongoDB"
                            progress={80}
                        />
                        <Skill
                            skill="VueJS"
                            progress={30}
                        />
                        <Skill
                            skill="Java"
                            progress={70}
                        />
                        <Skill
                            skill="Python"
                            progress={50}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;