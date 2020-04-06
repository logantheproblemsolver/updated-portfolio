import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import './App.css';
import ThinkfulProjects from './Projects/ThinkfulProjects/ThinkfulProjects';

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
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
