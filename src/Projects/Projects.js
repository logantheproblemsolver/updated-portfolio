import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import ThinkfulProjects from './ThinkfulProjects/ThinkfulProjects'
import PersonalProjects from './PersonalProjects/PersonalProjects';

class Projects extends Component {
  render() {

    return (
      <div> 
        <Route path="/thinkfulprojects" Component={ThinkfulProjects} />
        <Route path="/personalprojects" Component={PersonalProjects} />
        <Link to="/thinkfulprojects">
          <div> 
            Thinkful Projects
          </div>
        </Link>
        <Link to="/personalprojects">
          <div>
            Personal Projects
          </div>
        </Link>

      </div>
    )
  }
}

export default Projects;
