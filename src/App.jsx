import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import BandPage from './components/BandPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:category" component={BandPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
