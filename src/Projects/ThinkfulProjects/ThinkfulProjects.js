import React, {Component} from 'react';
import GitHubLogo from '../../ContactMe/Github-Logo1.png';
import ComputerLogo from './computerLogo.png';
import SpaceExploration from './SpaceExploration.PNG';
import CommunityArtist from './CommunityArtist.PNG';
import JobsRUs from './JobsRUs.PNG';
import './thinkfulProjects.css';

class ThinkfulProjects extends Component {
  render() {
    return (
      <div className="thinkfulProjects">
        <section className="projectSection">
          <h2 className="projectTitle">Space Exploration</h2>
          <img src={SpaceExploration} className="projectImage" alt="Space Exploration Landing Page"/>
          <p className="projectDescription">
          This application gives the user the ability to explore space without leaving their house! This site allows people to look up NASA’s picture of the day and accompanying YouTube videos, as well as lookup space search terms that come with pictures and accompanying youtube videos. I made this because I think space is something that is super cool and shouldn't be difficult to learn about.
          </p>
          <p className="projectLanguages">
            This application is a front-end application and was built using HTML5, CSS3, JavaScript ES6, jQuery, and RESTful APIs.
          </p>
          <p className="projectLink">
            <img src={ ComputerLogo } className="computerLogo" alt="computer" />
            <a href="https://logantheproblemsolver.github.io/SpaceExploration/" target="_blank" rel="noopener noreferrer">View the live application!</a>
          </p>
          <p className="projectCode">
            <img src={ GitHubLogo } className="githubLogo" alt="GitHub Logo" />
            <a href="https://github.com/logantheproblemsolver/SpaceExploration" target="_blank" rel="noopener noreferrer">View the code!</a>
          </p>
        </section>
        <section className="projectSection">
          <h2 className="projectTitle">Community Artists</h2>
            <img src={CommunityArtist} className="projectImage" alt="Community Artists Landing Page"/>
            <p className="projectDescription">
            This application is a start to help bridge a gap between the art community and other communities. This application will allow you to upload images to a database and view said images. This is a great place for people who want to keep up with the art community or join the art community and don't know where to begin. I have had a mere glimpse into the art community, but I noticed that if someone doesn't know where to look then it's hard to figure it out. That's where this site comes in handy.
            </p>
            <p className="projectLanguages">
              This application is a full-stack application and was built using HTML5, CSS3, JavaScript ES6, React, Nodejs, Express, Postgresql, Jest, Mochai, Chai, and Supertest.
            </p>
            <p className="projectLink">
              <img src={ ComputerLogo } className="computerLogo" alt="computer" />
              <a href="https://community-artist-app.now.sh/" target="_blank" rel="noopener noreferrer">View the live application!</a>
            </p>
            <div className="fullstackCode">
              <p className="projectCode">
                <img src={ GitHubLogo } className="githubLogo" alt="GitHub Logo" />
                <a href="https://github.com/logantheproblemsolver/Community-Artists" target="_blank" rel="noopener noreferrer">View the front-end!</a>
              </p>
              <p className="projectCode">
                <img src={ GitHubLogo } className="githubLogo" alt="GitHub Logo" />
                <a href="https://github.com/logantheproblemsolver/Community-Artists-API" target="_blank" rel="noopener noreferrer">View the back-end!</a>
              </p>
            </div>
        </section>
        <section className="projectSection">
        <h2 className="projectTitle">Jobs R Us</h2>
            <img src={JobsRUs} className="projectImage" alt="Community Artists Landing Page"/>
            <p className="projectDescription">
            This application is a job board for anyone to use. Most job boards these days are either too expensive or have a niche; this one is designed so that it's simple, cheap, and can be for any type of job! Jobs R' Us is a great place for small businesses who don't want to pay high fees or expand their search by not being part of a specific niche. I built this app because one thing I want to be able to do is to help small businesses grow with the age of technology, and not get left behind.
            </p>
            <p className="projectLanguages">
              This application is a full-stack application and was built using HTML5, CSS3, JavaScript ES6, React, Nodejs, Express, Postgresql, Jest, Mochai, Chai, and Supertest.
            </p>
            <p className="projectLink">
              <img src={ ComputerLogo } className="computerLogo" alt="computer" />
              <a href="https://jobs-r-us.now.sh/" target="_blank" rel="noopener noreferrer">View the live application!</a>
            </p>
            <div className="fullstackCode">
              <p className="projectCode">
              <img src={ GitHubLogo } className="githubLogo" alt="GitHub Logo" />
              <a href="https://github.com/logantheproblemsolver/Jobs-R-Us-App" target="_blank" rel="noopener noreferrer">View the front-end!</a>
              </p>
              <p className="projectCode">
              <img src={ GitHubLogo } className="githubLogo" alt="GitHub Logo" />
              <a href="https://github.com/logantheproblemsolver/Jobs-R-Us-API" target="_blank" rel="noopener noreferrer">View the back-end!</a>
              </p>
            </div>
        </section>
      </div>
    );
  };
};

export default ThinkfulProjects;
