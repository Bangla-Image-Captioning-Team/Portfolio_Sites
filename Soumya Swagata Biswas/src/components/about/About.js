import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p><h5> My name is Soumya Swagata Biswas and I am currently pursuing my degree in Computer Science and Engineering from Bangladesh University of Engineering and Technology. I want to be a developer as I am interested in developing new things which excite me a lot. :) </h5> </p>
                         <p className={classes.br}>I love to learn new languages and having an interest in technologies around us, I like to stay on top of latest trends.
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;