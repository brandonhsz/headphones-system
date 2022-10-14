import React, { useState } from 'react'
import useSearchNumbers from '../hooks/useSearchNumbers'
import { useDataStore } from '../stores/data.store'
import { campaigns } from '../data/campaign';

const Busquedas = () => {

  const { formatNumbersToSearch, searchConincidences, coincidences } = useSearchNumbers()
  const { dataActive } = useDataStore()

  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-2xl font-bold'>Colocar Numeros a Buscar:</h1>
      <textarea name="" id="" rows={15} className='w-1/12 text-black text-center overflow-hidden rounded mt-2' onChange={e => formatNumbersToSearch(e.target.value)} />
      <button className='w-1/12 text-sm mt-3 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 hover:border-purple-300' onClick={() => searchConincidences(dataActive)}>Search</button>

      <div className='grid grid-cols-5 p-3'>
        {
          campaigns.map((campaign, index) => (
            <div className='mx-2 my-1'>
              <input
                type="radio"
                className='mx-2'
              />
              <label htmlFor="" className=''>{campaign}</label>
            </div>
          ))
        }
      </div>

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