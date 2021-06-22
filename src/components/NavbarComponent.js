import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import { Link, NavLink as NavLinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleNavigation } from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    navbar: state.navbar
  };
};

const mapDispatchToProps = {
  toggleNavigation: () => toggleNavigation()
};

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">Acme</NavbarBrand>
          <NavbarToggler onClick={() => this.props.toggleNavigation()} />
          <Collapse isOpen={this.props.navbar.navOpen} navbar>
            <Nav navbar className="ml-auto">
              {['Home', 'About', 'Contact', 'Messages'].map((item, index) => {
                return (
                  <NavItem key={index}>
                    <NavLinkRouter exact to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="nav-link">
                      {item}
                    </NavLinkRouter>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);