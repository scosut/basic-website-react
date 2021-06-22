import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import MessagesComponent from './MessagesComponent';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';

class MainComponent extends Component {
  render() {
    return (
      <TransitionGroup>
        <CSSTransition timeout={1000} classNames='fade' key={this.props.location.key}>
          <div className="App">
            <NavbarComponent />
            <Switch location={this.props.location}>
              <Route exact path='/' component={HomeComponent} />
              <Route exact path='/about' component={AboutComponent} />
              <Route exact path='/contact' component={ContactComponent} />
              <Route exact path='/messages' component={MessagesComponent} />
              <Redirect to='/' />
            </Switch>
            <FooterComponent />
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(MainComponent);