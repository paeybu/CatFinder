import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import Breeds from './components/cat/Breeds'
import Breed from './components/cat/Breed'
import BreedState from './context/breed/BreedState'
import Navbar from './components/layout/Navbar'
import SearchImage from './components/cat/SearchImage'

function App() {
  return (
    <BreedState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Breeds} />
            <Route exact path="/breed/:breed" component={Breed} />
            <Route exact path="/image" component={SearchImage} />
          </Switch>
        </div>
      </Router>
    </BreedState>
  )
}

export default App
