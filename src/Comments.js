import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props)
    console.log('comments are constructed')
    this.state = {
      comments: []
    }
  }

  renderComments() {
    return this.state.comments.map((comment, index) => <li key={index}>{comment}</li>)
  }

  handleSubmit(event) {
    console.log(this)
    event.preventDefault();
    let comment = event.target.querySelector('input').value
    this.setState((state, props) => ({
      comments: [...state.comments, comment]
    }))
    // don't do this!!!! -> this.state.comments.push(comment)
    // debugger
  }

  render() {
    console.log('rendering Comments')
    return (
      <section>
        <h2>Comments</h2>
        <form 
          onSubmit={this.handleSubmit.bind(this)} 
          id="addComment"
        >
          <h4>Add Comment</h4>
          <p>
            <input 
              name="comment" 
              type="text" 
            />

          </p>
          <input type="submit" />
        </form>
        <ul id="comments">
          {this.renderComments()}
        </ul>
      </section>
    )
  }
}

export default Comments