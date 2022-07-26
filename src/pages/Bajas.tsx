import React from 'react'
import HeaderTable from '../components/Tables/HeaderTable'
import TableBody from '../components/Tables/TableBody'
import TableHead from '../components/Tables/TableHead'
import { useDataStore } from '../stores/data.store'

const Bajas = () => {

  const { dataFilteredInactive } = useDataStore()

  return (
    <div>
      <div className="container mx-auto max-w-3xl">
        <div className="py-8">

          <HeaderTable
            title="Usuarios Inactivos"
          />

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">

                <TableHead
                  first='Nombre'
                  second='N.Empleado'
                  third='Sucursal'
                  fourth='Campaña'
                  fiveth='serial'
                />


                <TableBody
                  data={dataFilteredInactive}
                />

              </table>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bajas