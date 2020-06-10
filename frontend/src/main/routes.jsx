import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../components/home/home'
import User from '../components/user/user'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User} />
        <Redirect from='*' to='/' />
    </Switch>
