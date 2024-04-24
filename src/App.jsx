import { useState, Fragment } from 'react'
import './Components/Card/Card'
import './App.css'
import Card from './Components/Card/Card'

function App() {
  return (
    <>
      <header>
        <h1>Страничка с навыками</h1>
      </header>
      <main>
        <Card text="PHP" imageUrl="" />
        <Card text="JS" imageUrl="" />
        <Card text="C#" imageUrl="" />
      </main>
      <footer>

      </footer>      
    </>
  )
}

export default App
