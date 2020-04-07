import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Form from './pages/Form'
import Preview from './pages/Preview'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/preview" component={Preview} />
      </Switch>
    </BrowserRouter>
  )
}