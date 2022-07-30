import React from 'react'
import Th from './Th'

interface IProps {
  first: string
  second: string
  third: string
  fourth: string
  fiveth: string

}

const TableHead = ({ first, second, third, fourth, fiveth }: IProps) => {
  return (
    <>
      <thead>
        <tr>
          <Th>
            {first}
          </Th>

          <Th>
            {second}
          </Th>

          <Th>
            {third}
          </Th>

          <Th>
            {fourth}
          </Th>

          <Th>
            {fiveth}
          </Th>
        </tr>
      </thead>
    </>
  )
}

export default TableHead