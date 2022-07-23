import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { routes } from './constants'
import Footer from './components/Footer'

import Landingpage from './components/Landingpage'

import { useState } from 'react'
const Routes = () => {
  const [lang, setLang] = useState("EN")
  return (
    <div>
      <Router>
        <Route path="/" component={NavBar}></Route>
       
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                exact
                path={route.path.replaceAll(' ', '-')}
                component={route.component}
              ></Route>
            ))}
          </Switch>
        
        <Route path="/" >
          <Footer lang={lang} setLang={code => setLang(code)} />
        </Route>
      </Router>
    </div>
  )
}

export default Routes
