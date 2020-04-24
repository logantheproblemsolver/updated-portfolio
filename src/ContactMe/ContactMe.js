import React, {Component} from 'react';
import GithubLogo from './Github-Logo1.png';
import LinkedinLogo from './linkedinLogo.png';
import GmailLogo from './gmailLogo.png';
import PDFLogo from './pdfLogo.png';
import LogansResume from './FullStackDeveloperResume.pdf';
import './contactMe.css';

class ContactMe extends Component {
  render() {
    return (
        <section id="contact">
            <p>
              <img className="logo" src={GithubLogo} alt="GitHub Logo"/> 
              <a href="https://github.com/logantheproblemsolver" target="_blank" rel='noreferrer noopener' className="contactLink">logantheproblemsolver</a>
            </p>
            <p>
              <img className="logo" src={LinkedinLogo} alt="Linkedin Logo"/> 
              <a href="https://www.linkedin.com/in/ellislogan/" target="_blank" rel='noreferrer noopener' className="contactLink">Logan Ellis</a>
            </p>
            <p>
              <img className="logo" src={GmailLogo} alt="Gmail Logo"/> 
              <a href="mailto:mrloganellis.com" className="contactLink">Email me!</a> 
            </p>
            <img className="logo" src={PDFLogo} alt="PDF Logo"/>
            <a href={ LogansResume } className="contactResume contactLink" download>Logan's Resume</a>
        </section>
    );
  };
};

export default ContactMe;
