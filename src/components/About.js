import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (
        <div className='about'>
            <div className='about-content'>
                <h1>
                    <Fade bottom cascade>
                        Sobre mi.
                    </Fade>
                </h1>             
            </div>
            {
                data.ShowAboutImage 
                ? 
                <img 
                src={data.aboutImage} 
                alt='about iamge'>
                </img> : null
            }
        </div>  
        );
    }
}
 
export default About;