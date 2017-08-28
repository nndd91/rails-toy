import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers/rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware, push } from 'react-router-redux'
import { createBrowserHistory } from 'history'

const history = routerMiddleware(createBrowserHistory())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = (railsProps) => (
  createStore(rootReducer,
              railsProps,
              composeEnhancers(applyMiddleware(ReduxPromise, logger, thunk, history)))
)

export default configureStore
