import React from 'react'

interface IProps {
  first: string
  second: string
  third: string
  fourth: string
}

const TableHead = ({ first, second, third, fourth }: IProps) => {
  return (
    <>
      <thead>
        <tr>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          >
            {first}
          </th>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          >
            {second}
          </th>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          >
            {third}
          </th>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          >
            {fourth}
          </th>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          ></th>
        </tr>
      </thead>
    </>
  )
}

export default TableHead