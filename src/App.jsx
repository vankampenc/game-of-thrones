import { useEffect, useState } from 'react'
import './App.css'
import House from './components/House'

function App() {

  const [houses, setHouses] = useState([])

  const [page, setPage] = useState(1)

  const itemsPerPage = 50

  const onNextPageClick = () => {
    setPage(page+1)
  } 
  const onPreviousPageClick = () => {
    setPage(page-1)
  }

  useEffect(() => {
    fetch(`https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${itemsPerPage}&hasDiedOut=false`).then((res) => {
      return res.json()
    })
      .then((data) => {
        console.log("data", data)
        setHouses(data)
      })
  }, [page])

  //components
  return (
    <>
      <h1>Game of Thrones</h1>
      <div>
        {
          houses.map(house => <House key={house.url} house={house} />)
        }
      </div>
      <button 
        disabled={page <=1 ? true : false}
        onClick={onPreviousPageClick}>
          Previous</button>
      <button 
        disabled={houses.length < 50}
        onClick={onNextPageClick}>
          Next</button>
    </>
  )
}

export default App

