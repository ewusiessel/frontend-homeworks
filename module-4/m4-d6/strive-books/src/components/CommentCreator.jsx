import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";

class CommentCreator extends Component {
  state = {
    rate: 0,
    comment: "",
  };
    
    
    sendComment = async () => {
        const toSend = {
            rate: this.state.rate,
            comment: this.state.comment,
            elmentId: this.props.bookId
        }


        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwYWYxNWIxZjBmYjAwMTVkOTE4NGUiLCJpYXQiOjE2MjAwODczNjIsImV4cCI6MTYyMTI5Njk2Mn0.vO6mqH--h8ajlZQR7gCcoGlfyMkVQ9G001zT8UuOSes"
            },
            method: "POST",
            body: JSON.stringify(toSend)
            });
        
        if (response.ok) {
        console.log(await response.json())
    }
    }
    

  render() {
    return (
      <>
        <FormControl
          value={this.state.rate}
          type="number"
          onChange={(event) =>
            this.setState({ rate: event.currentTarget.value })
          }
        ></FormControl>
        <FormControl
          value={this.state.comment}
          type="string"
          onChange={(event) =>
            this.setState({ comment: event.currentTarget.value })
          }
            ></FormControl>
            <Button onclick={this.sendComment}></Button>
      </>
    );
  }
}

export default CommentCreator;
