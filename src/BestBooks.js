import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formbook from './Formbook';
import './BestBooks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book: [],
      show: false
    }
  }
  componentDidMount = () => {
    const { user } = this.props.auth0;
    let email = user.email
    let url = `https://can-of-books-ba.herokuapp.com/books?frontemail=${email}`
    axios.
      get(url).
      then(result => {
        this.setState({
          book: result.data
        })
        // console.log(result.data)
        console.log(this.state.book);
      })
  }
  getting = (obj) => {
    this.setState({
      book: obj
    })
    console.log(obj)
  }
  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`https://can-of-books-ba.herokuapp.com/deletebooks/${id}?email=${email}`)

      .then((result) => {
        this.setState({
          book: result.data,
        });
      })
      .catch((err) => {
        console.log("Error on deleting");
      });
  };
  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        <Formbook getting={this.getting} />


        {this.state.book.map(item => {
          return (
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Header>name book :{item.title}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>book sescription :{item.description}</ListGroup.Item>
                  <ListGroup.Item>book status : {item.status}</ListGroup.Item>


                </ListGroup>
                <Button variant="secondary" onClick={() => this.deleteBook(item._id)}>
                  Delete
                </Button>
              </Card>
            </>
          )
        })}
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
