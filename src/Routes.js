import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import ScrollToTop from './utils/ScrollToTop'
import { routes } from './constants'
import Footer from './components/Footer'

import BlogPage from './components/BlogPage'
import BlogDetailPage from './components/BlogDetailPage'
import Landingpage from './components/Landingpage'
import CommGuide from './components/Privacy/CommGuide'
import { useState } from 'react'
const Routes = () => {
  const [lang, setLang] = useState("EN")
  return (
    <div>
      <Router>
        <Route path="/" component={NavBar}></Route>
        <ScrollToTop>
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
        </ScrollToTop>
        <Route path="/" >
          <Footer lang={lang} setLang={code => setLang(code)} />
        </Route>
      </Router>
    </div>
  )
}

export default Routes
