import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className="container text-title text-center my-5">
        <h1 className="display-4">EROR 404</h1>
        <h3>The requested url{this.props.location.pathname} was not found</h3>
      </div>
    )
  }
}
