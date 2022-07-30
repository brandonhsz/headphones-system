import React from 'react'
import { useDataStore } from '../../stores/data.store'
import TableItem from './TableItem'



const TableBody = () => {

  const { dataFiltered } = useDataStore()
  console.log(dataFiltered);
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
          dataFiltered.map((item: any, index) => (
            <TableItem
              key={index}
              name={item.name}
              employeeNumber={item.employeeId}
              branch={'branch'}
              campaign={'campaign'}
              serialNumber={item.headPhone.serialNumber}
            />
          ))
      }

    </tbody>
  )
}

export default TableBody