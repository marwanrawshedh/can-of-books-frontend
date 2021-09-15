import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formbook from "./Formbook";
import "./BestBooks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { withAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import axios from "axios";

import Updateform from "./Updateform";
class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      show: false,
      showup: false,
      id: "",
    };
  }
  componentDidMount = () => {
    const { user } = this.props.auth0;
    let email = user.email;
    let url = `https://can-of-books-ba.herokuapp.com/books?frontemail=${email}`;
    axios.get(url).then((result) => {
      this.setState({
        book: result.data,
      });
      
    });
  };
  getting = (obj) => {
    this.setState({
      book: obj,
    });
  
  };
  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
   
    axios
      .delete(
        `https://can-of-books-ba.herokuapp.com/deletebooks/${id}?email=${email}`
      )

      .then((result) => {
        this.setState({
          book: result.data,
        });
      })
      .catch((err) => {
        console.log("Error on deleting");
      });
  };

  updateshow = (id) => {
    this.setState({
      showup: true,
      id: id,
    });
    // console.log(id);
  };
  updateclose = () => {
    this.setState({
      showup: false,
    });
  };

  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: email,
    };

    axios
      .put(
        `https://can-of-books-ba.herokuapp.com/updatebooks/${this.state.id}`,
        obj
      )
      .then((result) => {
        this.setState({
          book: result.data,
        });
        console.log(result.data);
      })
      .catch((err) => {
        console.log("Error on updating");
      });
  };

  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>

        <Formbook getting={this.getting} />

        {this.state.book.map((item) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Header>name book :{item.title}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    book sescription :{item.description}
                  </ListGroup.Item>
                  <ListGroup.Item>book status : {item.status}</ListGroup.Item>
                </ListGroup>
                <Updateform
                  id={item._id}
                  updateBook={this.updateBook}
                  updateshow={this.updateshow}
                  updateclose={this.updateclose}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                  showup={this.state.showup}
                />
                <Button
                  variant="danger"
                  onClick={() => this.deleteBook(item._id)}
                >
                  Delete
                </Button>

              </Card>
            </>
          );
        })}
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
