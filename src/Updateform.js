import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { withAuth0 } from '@auth0/auth0-react';

class Updateform extends React.Component {

    
    
    render() {
        return (
            <>
                <Button variant="primary" onClick={() =>this.props.updateshow(this.props.id)}>
                    Update
                </Button>

                <Modal show={this.props.showup} onHide={this.props.updateclose}>
                    <Modal.Header closeButton>
                        <Modal.Title>add your book</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Form onSubmit={this.props.updateBook} >
                            <Modal.Body>
                                <Form.Label>name of the book</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.title} name="title"  />

                                <Form.Control size="lg" defaultValue={this.props.description} type="text" name="description" />

                                <select name="status" defaultValue={this.props.status} id="status">
                                    <option>Open this select menu</option>
                                    <option value="Historical1">Historical</option>
                                    <option value="religious">religious</option>
                                    <option value="science">science</option>
                                </select>
                            </Modal.Body>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" onClick={this.props.updateclose}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default Updateform;
