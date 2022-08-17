import React from 'react'
import { IUser } from '../../interfaces/userinterface'
import { useDataStore } from '../../stores/data.store'
import TableItem from './TableItem'



const TableBody = ({ data }: any) => {



  return (
    <tbody>

      {
        data.length === 0 ?
          (<tr>
            <td>
              <h2>No hay Diademas</h2>
            </td>
          </tr>)
          :
          data.map((item: IUser, index: number) => (
            <TableItem
              key={index}
              name={item.name}
              employeeNumber={item.employeeId}
              branch={item.branch}
              campaign={item.campaign}
              serialNumber={item?.headPhone?.serialNumber}
              index={index}
            />
          ))
      }

    </tbody>
  )
}

export default TableBody