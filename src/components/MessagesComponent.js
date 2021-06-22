import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import SidebarComponent from './SidebarComponent';
import { connect } from 'react-redux';
import { fetchMessages } from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = {
  fetchMessages: () => fetchMessages()
};

class MessagesComponent extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <h1>Messages</h1>

            {this.props.messages.errMess.length > 0 &&
              <p>{this.props.messages.errMess}</p>
            }

            {this.props.messages.messages.length === 0 &&
              <p>No messages have been submitted.</p>
            }

            {this.props.messages.messages.length > 0 &&
              this.props.messages.messages.map((message, index) => {
                return (
                  <ListGroup key={index}>
                    <ListGroupItem>
                      <strong>Name:</strong> {message.name}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Email:</strong> {message.email}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Text:</strong> {message.message}
                    </ListGroupItem>
                  </ListGroup>
                );
              })
            }
          </Col>
          <Col md={4}>
            <SidebarComponent />
            <p>This is appended to the sidebar from Messages.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesComponent);