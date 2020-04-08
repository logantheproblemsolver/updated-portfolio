import React, {Component} from 'react';
import './aboutMe.css';
import ProfilePhoto from './ProfilePhoto.jpg';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe">
        <section className="aboutSection">
        <h2 className="header "> Who am I?</h2>
          <p className="paragraph">
            Hello, my name is Logan Ellis. I am a full-stack developer as well as an avid dreamer of traveling (fun fact: the picture was taken in Venice).
          </p>
          <p className="paragraph">I am currently in Thinkful's full-stack engineering program. While in Thinkful I have become proficient in HTML5, CSS3, Javascript ES6, jQuery, Reactjs, Nodejs, Express, and Postgres. I wanted to get into coding because I love the challenge it gives me. Not only do I love the challenge of it, but also I love knowing that there are people out there that I can truly help with writing code. Right now, I am really looking forward to graduating and starting my own projects! Currently, I am starting to help in a Covid-19 project, and also learning to build mobile apps using React Native. </p>
          <p className="paragraph">I think that Thinkful has not only helped me learn how to code, but also gave me the tools to learn how to broaden my horizons and learn code that isn't on their curriculum. I am a really outgoing person, who fits well into any environment I am put in. I always aim to achieve and strive. I am looking for a job that will constantly challenge me, and allows me to learn as much as I can while also working with other great developers.</p>
        </section>
        <img src={ProfilePhoto} className="profile" alt="Logan Ellis"/>
      </div>
    );
  };
};

export default AboutMe;
