import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header'
import Router from './Routes/Router'
import { useDataStore } from './stores/data.store'


import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const { data, fetch } = useDataStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <Header />
      <Router />
      <ToastContainer />
    </>
  )
}

export default App