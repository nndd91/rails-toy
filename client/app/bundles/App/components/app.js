import React, { Component } from 'react'
import JokeList from './joke_list'
import JokeTags from './joke_tag'
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
              <Link to="/app">Home</Link>
              <Link to="/app/test">Test</Link>
            </div>

            <div className="col-xs-10">
              <div className="row">
                <Route exact path="/app" component={JokeList} />
                <Route path="/app/test" component={JokeTags} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
