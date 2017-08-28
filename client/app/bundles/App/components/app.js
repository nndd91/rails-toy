import React, { Component } from 'react'
import JokeList from './joke_list'
import SideBar from './sidebar'
import { Route, Link } from 'react-router'


export default class App extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <h1>App Component2</h1>
          <div className="col-xs-2">
            <SideBar />
          </div>

          <div className="col-xs-10">
            <div className="row">
              <JokeList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
