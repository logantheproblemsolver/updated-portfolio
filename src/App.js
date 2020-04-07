import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import './App.css';
import ThinkfulProjects from './Projects/ThinkfulProjects/ThinkfulProjects';
import PersonalProjects from './Projects/PersonalProjects/PersonalProjects';

class App extends React.Component {
  render() {
    return (
      <div className="mainApp">
        <NavBar />
        <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contactme" component={ContactMe} />
            <Route exact path="/thinkfulprojects" component={ThinkfulProjects} />
            <Route exact path="/personalprojects" component={PersonalProjects} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
