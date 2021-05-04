import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import CommentCreator from "./CommentCreator";
import CommentListItem from "./LatestRelease"


class CommentList extends Component {
  state = {
    commentFilter: "",
  };

  render() {
    return (
      <>
        <FormControl
          value={this.state.commentFilter}
          onChange={(e) =>
            this.setState({
              commentFilter: e.currentTarget.value.toLowerCase(),
            })
          }
        ></FormControl>
        <ul>
          {this.props.comments &&
            this.props.comments
                    .filter((comment) => comment.comment
                    .toLowercase()
                    .indexOf(this.state.commentFilter !== -1)
              )
              .map((comment) => (
                <CommentListItem key={comment.id} comment={comment} />
              ))}
        </ul>
        <CommentCreator> bookId={this.props.bookId}</CommentCreator>
      </>
    );
  }
}

export default CommentList;
