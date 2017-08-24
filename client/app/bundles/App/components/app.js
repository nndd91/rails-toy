import React, { Component } from 'react'
import JokeList from './joke_list'

import SideBar from './sidebar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default class App extends Component {
  render () {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <h1>App Component</h1>
            <div className="col-xs-2">
              <SideBar />
              <Link to="/">Home</Link>
              <Link to="/test">Test</Link>
            </div>

            <div className="col-xs-10">
              <div className="row">
                <Route exact path="/" component={JokeList} />
                <Route path="/test" component={SideBar} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
