import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Form from './pages/Form'
import Preview from './pages/Preview'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/preview" component={Preview} />
    </Switch>
  )
}