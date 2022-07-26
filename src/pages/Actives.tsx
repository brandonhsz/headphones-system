import React from 'react'
import Spinner from '../components/Spinners/Spinner'
import HeaderTable from '../components/Tables/HeaderTable'

import TableBody from '../components/Tables/TableBody'
import TableHead from '../components/Tables/TableHead'
import { useDataStore } from '../stores/data.store'

const Actives = () => {

  const { dataFilteredActive } = useDataStore()

  return (
    <div>
      <div className="container mx-auto max-w-3xl">
        <div className="py-8">

          <HeaderTable
            title="Usuarios Activos"
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
                  data={dataFilteredActive}
                />
              </table>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Actives
