import { useEffect, useState } from 'react'
import './App.css'
import House from './components/House'

function App() {

  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50&hasDiedOut=false").then((res) => {
      return res.json()
    })
      .then((data) => {
        console.log("data", data)
        setHouses(data)
      })
  }, [])

  //components
  return (
    <>
      <h1>Game of Thrones</h1>
      <div>
        {
          houses.map(house => <House key={house.url} house={house} />)
        }
      </div>
    </>
  )
}

export default App

