import React from 'react';
import { Route } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contactme" component={ContactMe} />
      </div>
    )
  }
}

export default App;
