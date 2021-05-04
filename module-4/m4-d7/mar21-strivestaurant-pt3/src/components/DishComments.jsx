import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";

class DishComments extends Component {
    render() {
        return (
          <div>
            <div className={`mt-${this.props.marginTop}`}>
              <h2>Comments for {this.props.dish.name}</h2>
              <ListGroup>
                {this.props.dish.comments.map((c) => (
                  <ListGroup.Item key={c.id}>
                    "{c.comment}" from {c.author}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        );
    }
}

export default DishComments;
  
  
