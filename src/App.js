import React from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './component/Navbar'
import Home from './page/Home'
import Rooms from './page/Rooms'
import Singleroom from './page/Singleroom'
import Erorr from './page/Erorr'

function App() {
    return (
        <>
            <Navbar />
            <Routes >
                <Route exact path='/' element={<Home />} />
                <Route path='/rooms' element={<Rooms />} />
                <Route path='/rooms/:slug' element={<Singleroom />} />
                <Route element={<Erorr />} />
            </Routes>


        </>
    )
}
export default App;
