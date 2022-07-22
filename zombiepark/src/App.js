import './App.css'
import InputLostItems from './components/InputLostItems'
import ListLostItems from './components/ListLostItems'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [lostItems, setLostItems] = useState([])

  useEffect(() => {
    async function getList() {
      const lostItemInfo = await axios.get(`http://localhost:3001/items`) //might need /api infront of /items
      setLostItems(lostItemInfo.data.items)
      console.log(lostItemInfo.data.items)
    }
    getList()
  }, [])

  return (
    <div className="App">
      <h1>What did you lose?</h1>
      {<InputLostItems />}
      <h1>List of lost items</h1>
      {lostItems.map((lostItem) => (
        <ListLostItems
          key={lostItem.name}
          name={lostItem.name}
          // description={lostItem.description}
          // date={lostItem.dateLost}
        />
      ))}
    </div>
  )
}

export default App
