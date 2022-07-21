import './App.css'
import { useState } from 'react'
import InputLostItems from './components/InputLostItems'
import ListLostItems from './components/ListLostItems'

const App = () => {
  return (
    <div className="App">
      <h1>What did you lose?</h1>
      {<InputLostItems />}
    </div>
  )
}

export default App
