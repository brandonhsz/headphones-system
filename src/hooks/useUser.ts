import React, { useState } from 'react'
import { IUser } from '../interfaces/userinterface'

const useUser = () => {

  const [user, setUser] = useState<IUser>({
    name: '',
    employeeId: '',
    description: '',
    serialNumber: '',
    campaign: '',
    branch: '',
    headPhone: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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

    const response = await fetch('http://10.9.2.234:8081/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    })
    const data = await response.json()
    setUser({
      name: '',
      employeeId: '',
      description: '',
      serialNumber: '',
      campaign: '',
      branch: '',
      headPhone: ''
    })

  }

  return {
    user,
    handleChange,
    handleSubmit
  }
}

export default useUser