import React from 'react'
import JokeSearch from './joke_search'
import JokeTags from './joke_tag'
import ComparePreview from './compare_preview'
import { Route, Link } from 'react-router-dom'
const SideBar = (props) =>  {
  return (
      <div>
        <div className="row">
          <JokeSearch />
        </div>
        <div className="row">
          <JokeTags />
        </div>
        <div className="row">
          <Route exact path="/app" component={ComparePreview} />
        </div>
      </div>
  )
}

export default SideBar
