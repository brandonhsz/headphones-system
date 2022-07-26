import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Router from './Routes/Router'
import { useDataStore } from './stores/data.store'


const App = () => {

  const { data, fetch } = useDataStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <Header />
      <Router />
    </>
  )
}

export default App