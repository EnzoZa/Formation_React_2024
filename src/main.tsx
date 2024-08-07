import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.js'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter as Router } from 'react-router-dom';
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render( 
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
