import Home from "@/pages/Home"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Search from "@/pages/Search"
import Pokemon from "@/pages/Pokemon"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path="/pokemon/:id" element={<Pokemon/>}/>
      </Routes>
    </>
  )
}

export default App
