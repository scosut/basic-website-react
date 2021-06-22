import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import SidebarComponent from './SidebarComponent';

const HomeComponent = () => {
  return (
    <Container>
      <Jumbotron className="text-center">
        <Container>
          <h1>Welcome to Our Site</h1>
          <p className="lead">Welcome to our brand new Laravel powered website. This site uses Laravel version 5.4.</p>
        </Container>
      </Jumbotron>
      <Row>
        <Col md={8}>
          <h1>Home</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit repellendus, aliquam, amet atque expedita ea esse suscipit iure hic voluptate, quis cum porro consequatur accusamus nostrum quo. Magnam, eligendi.</p>
        </Col>
        <Col md={4}>
          <SidebarComponent />
          <p>This is appended to the sidebar from Home.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;