import React from 'react' 
import {
  Switch,
  BrowserRouter,
  Route
} from 'react-router-dom'
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={HomeScreen} exact path='/' />
        <Route component={LoginScreen} exact path='/login' />
        <Route component={AboutScreen} exact path='/about' />
        {/* default routes 404 */}
        <Route component={() => <h2>404 Not Found</h2>} />
        {/* <Redirect to='/' /> */}
      </Switch>
    </BrowserRouter>
  )
}