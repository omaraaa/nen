import React, { useState } from 'react'
import logo from './logo.svg'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="lg:mx-48">
        <Header></Header>
        <div className="w-full max-w-8xl m-auto">

          <div className="lg:flex">
            <div className="min-w-0 w-full flex-auto">
              <Switch>
                <Route path="/about">
                  <main className="mx-4 flex flex-col lg:items-center justify-center h-screen">
                    A UAE based company software development company.
                  </main>
                </Route>
                <Route path="/services">
                  <main className="mx-4 flex flex-col lg:items-center justify-center h-screen">
                    Coming Soon.
                  </main>
                </Route>
                <Route path="/">
                  <main className="mx-4 flex flex-col lg:items-center justify-center h-screen">
                    A UAE based company software development company.
                  </main>
                </Route>
              </Switch>

              <footer className="flex items-center justify-center w-full h-12 border-t mt-8">
                Coming Soon.
              </footer>
            </div>

          </div>
        </div>



      </div>
    </Router>
  )
}

export default App
