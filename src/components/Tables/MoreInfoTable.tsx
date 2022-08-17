import React from 'react'
import { useDataStore } from '../../stores/data.store'

const MoreInfoTable = ({ index }: { index: number }) => {

  const { dataFiltered } = useDataStore()
  const { status, createdAt } = dataFiltered[index]
  const { description, type } = dataFiltered[index].headPhone
  console.log(dataFiltered[index]);
  return (
    <tr className=''>

      <td className='bg-gray-600 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Estado: <span>{status ? 'Activo' : 'Inactivo'}</span></p>
      </td>

      <td className='bg-gray-600 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Descripcion: <span>{description}</span></p>
      </td>

      <td className='bg-gray-600 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Type: <span>{type}</span></p>
      </td>

      <td className='bg-gray-600 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Diadema: <span>{status ? 'Activa' : 'Baja'}</span></p>
      </td>

      <td className='bg-gray-600 rounded-sm p-5'>
        <p className="font-bold whitespace-no-wrap text-center text-sm flex flex-col text-black">Fecha <span>{createdAt}</span> </p>
      </td>
    </tr>
  )
}

export default MoreInfoTable
