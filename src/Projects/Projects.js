import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import ThinkfulProjects from './ThinkfulProjects/ThinkfulProjects';
import PersonalProjects from './PersonalProjects/PersonalProjects';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <section className="projects-page">
        <Route path="/thinkfulprojects" Component={ThinkfulProjects} />
        <Route path="/personalprojects" Component={PersonalProjects} />
        <Link to="/thinkfulprojects">
          <section id="thinkfulProjectsLink" className="project-links">
            Thinkful Projects
          </section>
        </Link>
        <Link to="/personalprojects">
          <section id="personalProjectsLink" className="project-links">
            Personal Projects
          </section>
        </Link>
      </section>
    );
  };
};

export default Projects;
