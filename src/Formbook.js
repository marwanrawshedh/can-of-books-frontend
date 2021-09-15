import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
class Formbook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            book: [],
            show: false
        }
    }
    handleShow = () => {
        this.setState({ show: true })

    }
    handleClose = () => {
        this.setState({ show: false })
    }
    addbook = (event) => {
        event.preventDefault();
        const { user } = this.props.auth0;
        const email = user.email;
        const obj = {
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value,
            email: email
        }
        // console.log(obj)
        axios
            .post(`https://can-of-books-ba.herokuapp.com/addbooks`, obj)
            .then(result => {
                this.setState({
                    book: result.data
                }
               )
               console.log(result.data)
                this.props.getting(this.state.book)
            })
            .catch(err => {
                console.log('Error on adding data');
            })
    }
    render() {
        return (
            <>
                <Button variant="success" onClick={this.handleShow}>
                    add book
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>add your book</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Form onSubmit={this.addbook} >
                            <Modal.Body>
                                <Form.Label>name of the book</Form.Label>
                                <Form.Control type="text" name="title" />
                                <Form.Control size="lg" type="text" name="description" />
                                <select name="status" id="status">
                                    <option>Open this select menu</option>
                                    <option value="Historical1">Historical</option>
                                    <option value="religious">religious</option>
                                    <option value="science">science</option>
                                </select>
                            </Modal.Body>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default withAuth0(Formbook);