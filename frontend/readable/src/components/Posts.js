import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
  render(){
    return(
      <ul>
        {
          this.props.posts.length > 0 && this.props.posts.map((id, title) => {
            <li key={id}> {title}> </li>
          })
        }
      </ul>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts
  }
}
export default connect(mapStateToProps)(Posts)
