import React from "react";
import { Form, Button } from "react-bootstrap";

const MyCommentsArea = () => {
  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <h6>Book Rating</h6>
      <span id="star" class="fa fa-star checked"></span>
      <span id="star" class="fa fa-star checked"></span>
      <span id="star" class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <br></br>
      <Form.Label>Write Review</Form.Label>
      <Form.Control as="textarea" rows={3} />
      <br></br>
      <Button variant="success">Submit</Button>{" "}
      <Button variant="danger">Delete</Button>{" "}
    </Form.Group>
  );
};

export default MyCommentsArea;
