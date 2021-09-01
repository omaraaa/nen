import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full">

      <main className="main">
        <header className="top">
          <h1 className="title">
            NEN
          </h1>

          <p className="description">
            Coming Soon!
          </p>
        </header>
      </main>

      <footer className="footer">
      </footer>
    </div>
  )
}

export default App
