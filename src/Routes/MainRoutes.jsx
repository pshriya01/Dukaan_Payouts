import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Payout from '../Pages/Payout'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Payout />}></Route>
    </Routes>
  )
}

export default MainRoutes