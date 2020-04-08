import { createStore, applyMiddleware } from 'redux'
//import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducers } from './reducers/index'

export default function configureStore() {
    return createStore(reducers, applyMiddleware(thunk))
}
