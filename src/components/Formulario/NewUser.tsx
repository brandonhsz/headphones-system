import React, { useState } from 'react'
import { campaigns, branches, headPhones } from '../../data'
import { IUser } from '../../interfaces/userinterface'
import useUser from '../../hooks/useUser';


const NewUser = () => {

  const { handleSubmit, handleChange, user } = useUser()

  return (
    <form
      className='flex flex-col w-1/2 mx-auto mt-10 border border-gray-400 rounded-lg p-4'
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name='name'
        className='mb-6 p-1 rounded-xl text-black'
        placeholder='Nombre'
        value={user?.name.toUpperCase()}
        onChange={(e) => handleChange(e)}
      />

      <input
        type="number"
        name='employeeId'
        className='mb-6 p-1 rounded-xl text-black'
        placeholder='Numero de Empleado'
        value={user?.employeeId}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name='description'
        className='mb-6 p-1 rounded-xl text-black'
        placeholder='Descripcion de Diadema'
        value={user?.description.toUpperCase()}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name='serialNumber'
        className='mb-6 p-1 rounded-xl text-black'
        placeholder='Numero de Serie'
        value={user?.serialNumber}
        onChange={(e) => handleChange(e)}
      />

      <select
        name="campaign"
        id="campaign"
        className='text-center mb-6 p-2 text-black rounded-xl'
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
        className='text-center mb-6 p-2 text-black rounded-xl'
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
        className='text-center mb-6 p-2 text-black rounded-xl'
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

      <button type='submit' className='bg-blue-500 text-white p-2 rounded-xl' >Send</button>
    </form>
  )
}

export default NewUser