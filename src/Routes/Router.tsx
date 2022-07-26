import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Actives from '../pages/Actives'
import Bajas from '../pages/Bajas'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/active" element={<Actives />} />
        <Route path="/bajas" element={<Bajas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router