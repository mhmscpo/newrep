import React from 'react'
import Editor from './pages/editor'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import Footer from './components/ui/Footer/Footer'
import { Route, Routes, useParams, useLocation } from 'react-router-dom'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import {MemeThumbnailConnected} from './components/ui/MemeThumbnail/MemeThumbnail'

const App = () => {
  console.log({useParams, useLocation})
  return (
    
    <div className="App">
      <FlexV3Grow>
          <Header/>
          <NavBar/>
          <Routes>
              <Route path='/' element={<div><h1>Hello</h1></div>}></Route>
              <Route path='/thumbnail' element={<MemeThumbnailConnected/>}></Route>
              <Route path='/meme' element={<Editor/>}></Route>             
              <Route path='/meme/:id' element={<Editor/>}></Route>
          </Routes>
          <Footer/>
      </FlexV3Grow>
    </div>
  )
}

export default App