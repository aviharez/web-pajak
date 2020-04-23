import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import Form from './pages/Form'
import Preview from './pages/Preview'

export default function App() {
  return (
   <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={Form} />
      <Route path="/preview" component={Preview} />
    </Switch>
   </HashRouter>
  )
}
