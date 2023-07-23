import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
            </Routes>
        </div>
    )
}

export default Routers