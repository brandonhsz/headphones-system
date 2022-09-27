import React from 'react'
import HeaderTable from './HeaderTable'
import TableBody from './TableBody'
import TableHead from './TableHead'


const Table = () => {



  return (
    <div className="container mx-auto max-w-3xl">
      <div className="py-8">

        <HeaderTable
          title="Diademas Activas"
        />

        <div className="mx-4 sm:-mx-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">

              <TableHead
                first='Nombre'
                second='N.Empleado'
                third='Sucursal'
                fourth='Campaña'
                fiveth='serial'
              />


              <TableBody />

            </table>


          </div>
        </div>
      </div>
    </div>

  )
}

export default Table
