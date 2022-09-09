import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header'
import Router from './Routes/Router'
import { useDataStore } from './stores/data.store'


import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const { fetch, reset } = useDataStore()

  useEffect(() => {
    fetch()
  }, [reset])

  return (
    <div className='bg-purple-900 top-0 left-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-screen w-full'>
      <Header />
      <Router />
      <ToastContainer />
    </div>
  )
}

export default App