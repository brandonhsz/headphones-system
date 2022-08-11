import React from 'react'
import { IUser } from '../../interfaces/userinterface'
import { useDataStore } from '../../stores/data.store'
import TableItem from './TableItem'



const TableBody = () => {

  const { dataFiltered } = useDataStore()

  return (
    <tbody>

      {
        dataFiltered.length === 0 ?
          (<tr>
            <td>
              <h2>No hay Diademas</h2>
            </td>
          </tr>)
          :
          dataFiltered.map((item: IUser, index) => (
            <TableItem
              key={index}
              name={item.name}
              employeeNumber={item.employeeId}
              branch={item.branch}
              campaign={item.campaign}
              serialNumber={item?.headPhone?.serialNumber}
            />
          ))
      }

    </tbody>
  )
}

export default TableBody