import React, { useState } from 'react'
import { IUser } from '../interfaces/userinterface'
import { toastNotify } from '../libs/toast'

const useUser = () => {

  const [user, setUser] = useState<IUser>({
    name: '',
    employeeId: '',
    description: '',
    serialNumber: '',
    campaign: '',
    branch: '',
    headPhone: {
      serialNumber: '',
      description: '',
      active: false,
      type: ''
    }
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (user.name === '' || user.employeeId === '' || user.description === '' || user.serialNumber === '' || user.campaign === '' || user.branch === '' || user.headPhone.serialNumber === '' || user.headPhone.description === '' || user.headPhone.type === '') {
      toastNotify('Todos los campos son obligatorios', 'error')
      return
    }


    const bodyData = {
      name: user.name,
      employeeId: user.employeeId,
      campaign: user.campaign,
      branch: user.branch,
      status: true,
      headPhone: {
        type: user.headPhone,
        description: user.description,
        serialNumber: user.serialNumber,
        active: true
      }
    }

    const response = await fetch(import.meta.env.VITE_BACK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    })

    setUser({
      name: '',
      employeeId: '',
      description: '',
      serialNumber: '',
      campaign: '',
      branch: '',
      headPhone: {
        serialNumber: '',
        description: '',
        active: false,
        type: ''
      }
    })

    if (response.status === 201) {
      toastNotify('Usuario agregado correctamente', 'success')
      return;
    }
    else if (response.status === 400) {
      toastNotify('Todos los campos son requeridos', 'error')
      return;
    }
    else {
      toastNotify('Error al agregar usuario', 'error')
      return;
    }

  }

  return {
    user,
    handleChange,
    handleSubmit,
    setUser
  }
}

export default useUser