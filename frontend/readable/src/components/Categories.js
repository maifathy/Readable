import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {
  render(){
    console.log('categories: ', this.props.categories)
    return(
      <ul>
        {
          this.props.categories.length > 0 && this.props.categories.map((id, name) => {
            <li key={id}> {name} </li>
          })
        }
      </ul>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}
export default connect(mapStateToProps)(Categories)
