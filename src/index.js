import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {createStore,applyMiddleware,compose} from 'redux' 
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './reducer'
import {counter} from './index.redux'
import {BrowserRouter,Route} from 'react-router-dom'
import HomePage from './container/homePage/homePage'
// import LocationSelection from './container/locationSelection/locationSelection'
import Detail from './container/detail/detail'
import Create from './container/create/create'
import Drag from './container/drag/box/index'


// const store = createStore(counter,applyMiddleware(thunk))
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))


ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/create' component={Create}></Route>
            <Route path='/detail' component={Detail}></Route>
            <Route path='/drag' component={Drag}/>
          </div>        
        </BrowserRouter>,
    </Provider>),
    document.getElementById('root')
)




