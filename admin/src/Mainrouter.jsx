import React from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom';
import Employeehome from './Employeehome'
import Registration from './Registration'
import H1 from './H1'
import Work from './Work'
import Ourteam from './Ourteam'
import About from './About'
import Create from './Create';
import Update from './Update';
import 'bootstrap/dist/css/bootstrap.min.css';


const Mainrouter = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Login />} />\
        <Route path='/Signup' element={<Registration />} />

        <Route path='/Employeehome' element={<Employeehome />} />
        <Route path='/Employeehome' element={<H1 />} />
        <Route path='/Ourteam' element={<Ourteam />} />
        <Route path='/About' element={<About />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>

    </div>
  )
}

export default Mainrouter