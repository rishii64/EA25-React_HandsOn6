import React from 'react'
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { useState } from 'react'
import StuContact from './StuContact'
import EditStudent from './EditStudent'
import { Store } from './StoreCompo'

export default function RouteCompo() {
  const [data, setData] = useState([
    { name: 'Rishi', id: 1, age: 22, course: 'MERN', batch: 'October' },
    { name: 'Mahi', id: 2, age: 22, course: 'MEAN', batch: 'November' },
    { name: 'Saptarsi', id: 3, age: 23, course: 'Full Stack', batch: 'October' },
    { name: 'Anshuman', id: 4, age: 22, course: 'MERN', batch: 'November' },
    { name: 'Anuj', id: 5, age: 23, course: 'FrontEnd', batch: 'May' },
    { name: 'Harsh', id: 6, age: 22, course: 'BackEnd', batch: 'September' }
  ])
  return (
    <div>
      <BrowserRouter>
        <div id='links'>
          <Link id='linkHead' to='/'>Home</Link>
          <Link id='linkHead' to='/student'>Student</Link>
          <Link id='linkHead' to='/contact'>Contact Us</Link>
        </div>
        <Routes>
          <Route path='/student' element={
            <Store.Provider value={{ data: data, fun: setData }}>
              <Student />
            </Store.Provider>
          } />
          <Route path='/student/:id' element={
            <Store.Provider value={{ data: data, fun: setData }}>
              <EditStudent />
            </Store.Provider>
          } />
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/StuContact' element={<Store.Provider value={{ data: data, fun: setData }}>
              <StuContact />
            </Store.Provider>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

