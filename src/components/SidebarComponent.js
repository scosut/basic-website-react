import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const SidebarComponent = () => {
  return (
    <Card className="sidebar">
      <CardBody>
        <CardTitle tag="h3">Sidebar</CardTitle>
        <CardText>This is the sidebar.</CardText>
      </CardBody>
    </Card>
  );
}

export default SidebarComponent;