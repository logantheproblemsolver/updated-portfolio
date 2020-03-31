import React, {Component} from 'react';
import './aboutMe.css'
import ProfilePhoto from './ProfilePhoto.jpg'

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe">
        <section className="aboutSection">
        <h2 className="header "> Who am I?</h2>
          <p className="paragraph">Hello, my name is Logan Ellis. I am a constant learner of software development.</p>
          <p className="paragraph">I am currently in Thinkful's full-stack engineering program. There I was able to become proficient in HTML, CSS, and Javascript. I wanted to get into coding because I love the challenge it gives me. Not only do I love the challenge of it, but also I love knowing that there are people out there that I can truly help with writing code. Right now, I am really enjoying JavaScript and jQuery! However, I'm excited to learn more programs which include, but are not limited to: React JS, Node, Python, and React Native.</p>
          <p className="paragraph">I think that Thinkful is not only helping me learn how to code, but they're giving me the tools to learn how to broaden my horizons and learn code that isn't on their curriculum. I am a really outgoing person, who fits well into any environment I am put in. I always aim to achieve and strive. I am looking for a job that will constantly challenge me, and allows me to grow inside of the company.</p>
        </section>
        <img src={ProfilePhoto} className="profile" alt="Logan Ellis"/>
      </div>
    )
  }
}

export default AboutMe;
