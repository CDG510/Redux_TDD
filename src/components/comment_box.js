import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {comment: ''};
  }

  HandleChange(event){
    this.setState({ comment: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: ""})
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit.bind(this)}
        className="comment-box">
        <h2> Add a comment below</h2>
        <textarea
          value = {this.state.comment}
          onChange = {this.HandleChange.bind(this)}
          />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}



export default connect(null, actions )(CommentBox)
