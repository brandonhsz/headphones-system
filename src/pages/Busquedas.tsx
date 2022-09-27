import React, { useState } from 'react'
import useSearchNumbers from '../hooks/useSearchNumbers'
import { useDataStore } from '../stores/data.store'

const Busquedas = () => {

  const { formatNumbersToSearch, searchConincidences, coincidences } = useSearchNumbers()
  const { dataActive } = useDataStore()

  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-2xl font-bold'>Colocar Numeros a Buscar:</h1>
      <textarea name="" id="" rows={15} className='w-1/12 text-black text-center overflow-hidden' onChange={e => formatNumbersToSearch(e.target.value)} />
      <button className='w-1/12 text-sm mt-1 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 hover:border-purple-300' onClick={() => searchConincidences(dataActive)}>Search</button>

      {
        coincidences.length > 0 && (
          <div>
            <h1 className='text-2xl font-bold'>Resultados:</h1>
            <ul className='grid grid-cols-4'>
              {
                coincidences.map((item, index) => (
                  <li key={index} className='border rounded-md m-1 p-2 bg-white'>
                    <p className='text-black'>{item.name}</p>
                    <p className='text-black'>{item.employeeId}</p>
                    <p className='text-black'>{item.campaign}</p>
                    <p className='text-black'> <span>{item.headPhone.type}</span> <span>{item.headPhone.serialNumber}</span></p>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }

    </div>
  )
}

export default Busquedas