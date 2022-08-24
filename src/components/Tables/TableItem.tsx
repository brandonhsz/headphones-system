import React, { useState } from 'react'
import MoreInfoTable from './MoreInfoTable'

interface IProps {
  name: string
  employeeNumber: string
  branch: string
  campaign: string
  serialNumber: string
  index: number
}

const TableItem = ({ name = '', employeeNumber = '', branch = '', campaign = '', serialNumber = 'undefined', index }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

      <tr
        className='hover:cursor-pointer'
        onClick={() => { setIsOpen(!isOpen) }}
      >
        <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap text-center">
                {name}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap text-center">{employeeNumber}</p>
        </td>
        <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap text-center">{branch}</p>
        </td>

        <td className="px-5 py-5 border border-gray-200 bg-white text-sm ">
          <span className="relative px-3 py-1 font-semibold text-green-900 leading-tight">
            <p className="relative text-sm text-center bg-green-200 rounded-full py-1 px-2">{campaign}</p>
          </span>
        </td>

        <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap font-black text-center">{serialNumber}</p>
        </td>
      </tr>

      {
        isOpen &&
        <MoreInfoTable
          employeeNumber={employeeNumber}
        />
      }
    </>
  )
}

export default TableItem