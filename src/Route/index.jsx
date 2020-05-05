import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

export const RouteFunc = (param) => {
  console.log(param)
  return (
    <Switch>
        <Route path ={`/${param}`} /* component={`${param}`} */ >
          <Link to ={`/${param}`} />
        </Route>
    </Switch>
    )
}

export const RoutePath = {
  RouteFunc
}