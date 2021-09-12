import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import Loginbutton from './Loginbutton';

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
          <Loginbutton/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
