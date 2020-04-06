import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/Add">Add</Link>
        </h2>
        <h2>
          <Link to="/Edit">Edit</Link>
        </h2>
      </div>
    )
  }
}

export default Home
