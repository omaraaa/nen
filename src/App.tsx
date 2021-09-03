import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full">

      <main className="main">
        <header>
          <h1 className="title font-serif font-bold ">
            NEN
          </h1>

          <p className="description">
            Work In Progress!
          </p>
        </header>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default App
