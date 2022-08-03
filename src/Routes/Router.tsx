import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Actives from '../pages/Actives'
import Add from '../pages/Add'
import Bajas from '../pages/Bajas'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/active" element={<Actives />} />
        <Route path="/bajas" element={<Bajas />} />
        <Route path="/" element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router