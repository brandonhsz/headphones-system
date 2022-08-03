import React from 'react'
import { campaigns, branches, headPhones } from '../../data'


const NewUser = () => {
  return (
    <form
      className='flex flex-col w-1/2 mx-auto mt-10'
    >
      <input type="text" className='mb-3 p-1 rounded-xl' placeholder='Nombre' />
      <input type="text" className='mb-3 p-1 rounded-xl' placeholder='Numero de Empleado' />

      <select name="campaign" id="campaign" className='text-center mb-3 p-2 text-black rounded-xl'>
        <option disabled selected >--SELECCIONE UNA CAMPAÑA--</option>
        {
          campaigns.map((campaign, index) => (
            <option key={index} value={campaign}>{campaign}</option>
          ))
        }
      </select>

      <select name="branch" id="branch" className='text-center mb-3 p-2 text-black rounded-xl'>
        <option disabled selected >--SELECCIONE UNA SUCURSAL--</option>
        {
          branches.map((branch, index) => (
            <option key={index} value={branch}>{branch}</option>
          ))
        }
      </select>

      <select name='headPhone' id='headPhone' className='text-center mb-3 p-2 text-black rounded-xl'>
        <option disabled selected >--SELECCIONE UNA DIADEMA--</option>
        {
          headPhones.map((headPhone, index) => (
            <option key={index} value={headPhone}>{headPhone}</option>
          ))
        }
      </select>

      <input type="text" className='mb-3 p-1 rounded-xl' placeholder='Descripcion de Diadema' />
      <input type="text" className='mb-3 p-1 rounded-xl' placeholder='Numeo de Serie' />
    </form>
  )
}

export default NewUser