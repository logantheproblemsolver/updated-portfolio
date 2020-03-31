import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import ThinkfulProjects from './ThinkfulProjects/ThinkfulProjects'
import PersonalProjects from './PersonalProjects/PersonalProjects';
import './projects.css';

class Projects extends Component {
  render() {

    return (
      <div className="projectsPage"> 
        <Route path="/thinkfulprojects" Component={ThinkfulProjects} />
        <Route path="/personalprojects" Component={PersonalProjects} />
        <Link to="/thinkfulprojects">
          <section id="thinkfulProjectsLink" className="projectLinks"> 
            Thinkful Projects
          </section>
        </Link>
        <Link to="/personalprojects">
          <section id="personalProjectsLink" className="projectLinks">
            Personal Projects
          </section>
        </Link>

      </div>
    )
  }
}

export default Projects;
