import React, {Component} from 'react';
import GithubLogo from './Github-Logo1.png';
import LinkedinLogo from './linkedinLogo.png';
import GmailLogo from './gmailLogo.png';
import './contactMe.css';

class ContactMe extends Component {
  render() {
    return (
        <section id="contact">
            <p>
              <img className="logo" src={GithubLogo} alt="GitHub Logo"/> 
              <a href="https://github.com/logantheproblemsolver" target="_blank" rel='noreferrer noopener'>logantheproblemsolver</a>
            </p>
            <p>
              <img className="logo" src={LinkedinLogo} alt="Linkedin Logo"/> 
              <a href="https://www.linkedin.com/in/ellislogan/" target="_blank" rel='noreferrer noopener'>Logan Ellis</a>
            </p>
            <p>
              <img className="logo" src={GmailLogo} alt="Gmail Logo"/> 
              <a href="mailto:mrloganellis.com">Email me!</a> 
            </p>
        </section>
    )
  }
}

export default ContactMe;
