import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'
// import Navbar from '../components/Navbar.jsx'
import LayOut from './components/LayOut.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <RouterProvider router={router}/>
  {/* </React.StrictMode> */}
  </Provider>
)
