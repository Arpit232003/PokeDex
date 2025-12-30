import Home from "@/pages/Home"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from "@/pages/Search"
import Pokemon from "@/pages/Pokemon"
import MainSidebar from "./components/Sidebar"
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"

function App() {

  return (
    <>
    <SidebarProvider>
    <BrowserRouter>
    <MainSidebar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path="/pokemon/:id" element={<Pokemon/>}/>
      </Routes>
      </BrowserRouter>
      </SidebarProvider>
    </>
  )
}

export default App
