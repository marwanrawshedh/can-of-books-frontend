import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <Jumbotron>
        <Card style={{ width: '18rem' }}>
  <Card.Header>My Favorite Books</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>al resala</ListGroup.Item>
    <ListGroup.Item>al mosnad</ListGroup.Item>
    <ListGroup.Item>al moata`a</ListGroup.Item>
  </ListGroup>
</Card>
        {/* <h1>My Favorite Books</h1> */}
        {/* <p>
          This is a collection of my favorite books
        </p> */}
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
