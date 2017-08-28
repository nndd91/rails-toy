import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MainPage extends Component {
  render () {
    return (
      <section>
        <header>
          <NavLink to="/app">Home</NavLink>
          <NavLink to="/app/hello">Hello</NavLink>
          <NavLink to="/app/hi">Hi2</NavLink>
          <NavLink to="/app/there">There</NavLink>
        </header>
        {this.props.children}
      </section>
    )
  }
}

export default MainPage
