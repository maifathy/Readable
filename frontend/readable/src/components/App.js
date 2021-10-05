import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared.js'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Categories from './Categories.js'
import Posts from './Posts.js'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Categories />
          <Posts />
          {this.props.loading === true

          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
