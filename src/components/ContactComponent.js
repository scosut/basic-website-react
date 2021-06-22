import React, { Component } from 'react';
import {
  Alert,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button
} from 'reactstrap';
import SidebarComponent from './SidebarComponent';
import { connect } from 'react-redux';
import { clearAlert, clearInput, setInput, clearErrors, postMessage } from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    input: state.input,
    errors: state.errors,
    alert: state.alert
  };
};

const mapDispatchToProps = {
  clearAlert: () => clearAlert(),
  clearInput: () => clearInput(),
  setInput: e => setInput(e),
  clearErrors: () => clearErrors(),
  postMessage: (name, email, comments, refs) => postMessage(name, email, comments, refs)
};

class ContactComponent extends Component {
  componentDidMount = () => {
    this.props.clearAlert();
    this.props.clearInput();
    this.props.clearErrors();
  }

  handleInput = e => {
    this.props.setInput(e);
  }

  handleClick = () => {
    const refs = {
      name: this.nameInput,
      email: this.emailInput,
      message: this.messageInput
    };

    this.props.postMessage(this.props.input.name, this.props.input.email, this.props.input.message, refs);
  }

  render() {
    return (
      <Container>
        {this.props.alert.message.length > 0 &&
          <Alert color={this.props.alert.status}>
            {this.props.alert.message}
          </Alert>
        }
        <Row>
          <Col md={8}>
            <h1>Contact</h1>

            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Enter name" ref={el => (this.nameInput = el)} invalid={this.props.errors.errors.hasOwnProperty('name')} onChange={e => this.handleInput(e)} value={this.props.input.name} />
                <FormFeedback>
                  {this.props.errors.errors.hasOwnProperty('name') ? this.props.errors.errors.name[0] : ''}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" name="email" id="email" placeholder="Enter email" ref={el => (this.emailInput = el)} invalid={this.props.errors.errors.hasOwnProperty('email')} onChange={e => this.handleInput(e)} value={this.props.input.email} />
                <FormFeedback>
                  {this.props.errors.errors.hasOwnProperty('email') ? this.props.errors.errors.email[0] : ''}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" placeholder="Enter message" ref={el => (this.messageInput = el)} invalid={this.props.errors.errors.hasOwnProperty('message')} onChange={e => this.handleInput(e)} value={this.props.input.message} />
                <FormFeedback>
                  {this.props.errors.errors.hasOwnProperty('message') ? this.props.errors.errors.message[0] : ''}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Button color="primary" onClick={() => this.handleClick()}>SUBMIT</Button>
              </FormGroup>
            </Form>
          </Col>
          <Col md={4}>
            <SidebarComponent />
            <p>This is appended to the sidebar from About.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactComponent);