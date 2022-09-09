import React, { useState } from 'react'
import { campaigns, branches, headPhones } from '../../data'
import { IUser } from '../../interfaces/userinterface'
import useUser from '../../hooks/useUser';


const NewUser = () => {

  const { handleSubmit, handleChange, user } = useUser()

  return (
    <form
      // className='flex flex-col w-1/2 mx-auto mt-10 border border-gray-400 rounded-lg p-4'
      className='p-12 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900 mx-auto rounded-3xl w-4/6 '
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name='name'
        className='mb-6 w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400'
        id='name'
        placeholder='Nombre'
        value={user?.name.toUpperCase()}
        onChange={(e) => handleChange(e)}
      />


      <input
        type="text"
        name='employeeId'
        className='mb-6 w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400'
        placeholder='Numero de Empleado'
        value={user?.employeeId}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name='description'
        className='mb-6 w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400'
        placeholder='Descripcion de Diadema'
        value={user?.description.toUpperCase()}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name='serialNumber'
        className='mb-6 w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400'
        placeholder='Numero de Serie'
        value={user?.serialNumber}
        onChange={(e) => handleChange(e)}
      />

      <select
        name="campaign"
        id="campaign"
        className='mb-6 w-full text-center text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400'
        value={user?.campaign}
        onChange={(e) => handleChange(e)}
      >
        <option disabled value='' >--SELECCIONE UNA CAMPAÑA--</option>
        {
          campaigns.map((campaign, index) => (
            <option key={index} value={campaign}>{campaign}</option>
          ))
        }
      </select>

      <select
        name="branch"
        id="branch"
        className='mb-6 w-full  text-center text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400'
        value={user?.branch}
        onChange={(e) => handleChange(e)}
      >
        <option disabled value=''>--SELECCIONE UNA SUCURSAL--</option>
        {
          branches.map((branch, index) => (
            <option key={index} value={branch}>{branch}</option>
          ))
        }
      </select>

      <select
        name='headPhone'
        id='headPhone'
        className='mb-6 w-full text-center text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400'
        value={user?.headPhone.type}
        onChange={(e) => handleChange(e)}
      >
        <option disabled value='' >--SELECCIONE UNA DIADEMA--</option>
        {
          headPhones.map((headPhone, index) => (
            <option key={index} value={headPhone}>{headPhone}</option>
          ))
        }
      </select>

      <button type='submit' className=' w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400' >Send</button>
    </form>
  )
}

export default NewUser