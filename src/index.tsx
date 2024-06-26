import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import './styles/tailwind.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as serviceWorker from './serviceWorker'

import routes from './config/routes'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import Store from './store'

/*
<Provider store={store}></Provider>
 */
ReactDOM.render(
    <Provider store={Store()}>
        <React.StrictMode>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
