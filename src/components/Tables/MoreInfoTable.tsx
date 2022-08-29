import React from 'react'
import { useDataStore } from '../../stores/data.store'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { useNavigate } from 'react-router-dom'

dayjs.extend(timezone)
dayjs.extend(utc)

interface IProps {
  employeeNumber: string
}

const MoreInfoTable = ({ employeeNumber }: IProps) => {

  const navigate = useNavigate();

  const { data } = useDataStore()
  const user: any = data.find(({ employeeId }) => employeeId === employeeNumber)
  const { status, createdAt, _id } = user
  const { description, type } = user.headPhone

  const timeDay = dayjs(createdAt).utc().format('YYYY-MM-DD')
  const time = dayjs(createdAt).format('HH:mm:ss')

  console.log(user)
  return (
    <tr className=''>

      <td className='bg-gray-200 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Estado: <span>{status ? 'Activo' : 'Inactivo'}</span></p>
      </td>

      <td className='bg-gray-200 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Descripcion: <span>{description}</span></p>
      </td>

      <td className='bg-gray-200 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Tipo: <span>{type}</span></p>
      </td>

      <td className='bg-gray-200 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Fecha <span>{timeDay}</span> <span>{time}</span> </p>
      </td>

      <td className='bg-gray-200 rounded-sm p-5 hover:bg-gray-400 hover:cursor-pointer'>
        <p
          className="font-extrabold whitespace-no-wrap text-center text-sm flex flex-col text-black"
          onClick={() => navigate(`/edit/${_id}`)}
        >EDITAR USUARIO</p>
      </td>
    </tr>
  )
}

export default MoreInfoTable
