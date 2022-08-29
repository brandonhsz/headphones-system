import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { branches, campaigns, headPhones } from '../data'
import useUser from '../hooks/useUser'
import { fetchData } from '../libs/fetching'
import { toastNotify } from '../libs/toast';
import { useDataStore } from '../stores/data.store';

const Edit = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { setReset } = useDataStore()
  const [user, setUser] = useState({
    name: '',
    employeeId: '',
    branch: '',
    campaign: '',
    status: false,
    headPhone: {
      active: false,
      description: '',
      type: '',
      serialNumber: ''
    }
  })


  const handleSubmit = (e: any) => {
    e.preventDefault()
    const dataToSend = {
      name: user.name,
      employeeId: user.employeeId,
      branch: user.branch,
      campaign: user.campaign,
      status: user.status,
      headPhone: {
        active: user.headPhone.active,
        description: user.headPhone.description,
        type: user.headPhone.type,
        serialNumber: user.headPhone.serialNumber
      },
    }
    fetch(`${import.meta.env.VITE_BACK}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    }).then(res => res.status === 200 ? toastNotify('Usuario Modificado', 'success') : toastNotify('Error', 'error'))
      .then(() => {
        navigate('/')
        setReset()
      })
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACK}/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <form
      className='flex flex-col w-1/2 mx-auto mt-10 border border-gray-400 rounded-lg p-4'
      onSubmit={handleSubmit}
    >

      <select
        name="status"
        id="statis"
        className='text-center mb-6 p-2 text-black rounded-xl'
        value={user?.status.toString()}
        onChange={(e) => setUser({ ...user, status: e.target.value as any })}
      >
        <option value="" disabled>--ESTADO OPERADOR--</option>
        <option value="true">Activo</option>
        <option value="false">Inactivo</option>
      </select>

      <input
        type="text"
        name='name'
        className='mb-6 p-1 rounded-xl text-black'
        placeholder='Nombre'
        value={user?.name.toUpperCase()}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input
        type="number"
        name='employeeId'
        className='mb-6 p-1 rounded-xl text-black'
        placeholder='Numero de Empleado'
        value={user?.employeeId}
        onChange={(e) => setUser({ ...user, employeeId: e.target.value })}
      />
      <input
        type="text"
        name='description'
        className='mb-6 p-1 rounded-xl text-black'
        placeholder='Descripcion de Diadema'
        value={user?.headPhone?.description.toUpperCase()}
        onChange={(e) => setUser({ ...user, headPhone: { ...user.headPhone, description: e.target.value } })}
      />

      <input
        type="text"
        name='serialNumber'
        className='mb-6 p-1 rounded-xl text-black'
        placeholder='Numero de Serie'
        value={user?.headPhone.serialNumber}
        onChange={(e) => setUser({ ...user, headPhone: { ...user.headPhone, serialNumber: e.target.value } })}
      />

      <select
        name="campaign"
        id="campaign"
        className='text-center mb-6 p-2 text-black rounded-xl'
        value={user?.campaign}
        onChange={(e) => setUser({ ...user, campaign: e.target.value })}
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
        onChange={(e) => setUser({ ...user, branch: e.target.value })}
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
        onChange={(e) => setUser({ ...user, headPhone: { ...user.headPhone, type: e.target.value } })}
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

export default Edit