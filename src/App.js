import React from 'react'
import './bootstrap.min.css'
import {ListGroup, ListGroupItem, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HistoryScreen from './screens/HistoryScreen.js'

import Homescreen from './screens/Homescreen'

const App = () => {
  return (
    <Router>
       <Container>
      <h1 className='text-center mt-5'>CHBD</h1>
     
      <Route path='/history/:id' component={HistoryScreen} />
      <Route path='/' component={Homescreen} exact />
    </Container>
    </Router>
   
  )
}

export default App
