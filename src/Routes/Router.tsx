import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Spinner from '../components/Spinners/Spinner'
import Actives from '../pages/Actives'
import Add from '../pages/Add'
import Bajas from '../pages/Bajas'
import { useDataStore } from '../stores/data.store'

const Router = () => {

  const { dataActive } = useDataStore()

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/active" element={<Actives />} /> */}
        <Route path="/bajas" element={dataActive.length > 0 ? <Bajas /> : <Spinner />} />
        <Route path="/" element={dataActive.length > 0 ? <Actives /> : <Spinner />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router