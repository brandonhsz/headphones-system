import React from 'react'
import { useDataStore } from '../../stores/data.store'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { useNavigate } from 'react-router-dom'
import { getTime } from '../../libs/getTime'

dayjs.extend(timezone)
dayjs.extend(utc)

interface IProps {
  employeeNumber: string
}

const MoreInfoTable = ({ employeeNumber }: IProps) => {

  const navigate = useNavigate();

  const { data } = useDataStore()
  const user: any = data.find(({ employeeId }) => employeeId === employeeNumber)
  const { status, createdAt, updatedAt, _id } = user
  const { description, type } = user.headPhone

  const created = getTime(createdAt)
  const updated = getTime(updatedAt)

  console.log(created)
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
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black mb-2">Creado: <span>{created.day}</span> <span>{created.time}</span> </p>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Modificado: <span>{updated.day}</span> <span>{updated.time}</span> </p>
      </td>

      <td
        className='bg-gray-200 rounded-sm p-5 hover:bg-gray-400 hover:cursor-pointer'
        onClick={() => navigate(`/edit/${_id}`)}
      >
        <p className="font-extrabold whitespace-no-wrap text-center text-sm flex flex-col text-black">EDITAR USUARIO</p>
      </td>
    </tr>
  )
}

export default MoreInfoTable
