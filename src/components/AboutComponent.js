import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SidebarComponent from './SidebarComponent';

const AboutComponent = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit repellendus, aliquam, amet atque expedita ea esse suscipit iure hic voluptate, quis cum porro consequatur accusamus nostrum quo. Magnam, eligendi.</p>
        </Col>
        <Col md={4}>
          <SidebarComponent />
          <p>This is appended to the sidebar from About.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutComponent;