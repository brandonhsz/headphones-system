import React from 'react'
import { useDataStore } from '../../stores/data.store'
import TableItem from './TableItem'



const TableBody = () => {

  const { dataFiltered, filter } = useDataStore()
  console.log(dataFiltered);
  return (
    <tbody>

      {
        dataFiltered.length === 0 ?
          (<h2>No hay Diademas</h2>)
          :
          dataFiltered.map((item: any, index) => (
            <TableItem
              key={index}
              name={item.name}
              employeeNumber={item.id}
              branch={'branch'}
              campaign={'campaign'}
            />
          ))
      }

    </tbody>
  )
}

export default TableBody