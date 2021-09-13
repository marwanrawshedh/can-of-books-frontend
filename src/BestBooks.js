import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book: []
    }
  }
  componentDidMount = () => {
    const { user } = this.props.auth0;
    let email = user.email
    let url = `http://localhost:3010/books?frontemail=${email}`
    axios.
      get(url).
      then(result => {
        this.setState({
          book: result.data
        })
        console.log(result.data)

      })
  }
  render() {

    return (

      <>
        <h1>My Favorite Books</h1> 
        <p>
          This is a collection of my favorite books
        </p> 

        {this.state.book.map(item => {return(
          <Jumbotron>
            <Card style={{ width: '18rem' }}>
              <Card.Header>name book :{item.title}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>book sescription :{item.description}</ListGroup.Item>
                <ListGroup.Item>book status : {item.status}</ListGroup.Item>
                
              </ListGroup>
            </Card>
          </Jumbotron>
        )})}
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
