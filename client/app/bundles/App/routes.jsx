import React from 'react'
import { Route, Switch, IndexRoute, Link } from 'react-router-dom'
import NavBar from './components/navbar'
import Hello from './components/hello'
import Hi from './components/hi'
import App from './components/app'
import MainPage from './components/main_page'

export default (
  <MainPage>
    <Switch>
      <Route exact path="/app" component={Hello}/>
      <Route path="/app/hello" component={Hello}/>
      <Route path="/hi" component={Hi}/>
      <Route path="/app/hi" component={Hi}/>
    </Switch>
  </MainPage>
)
