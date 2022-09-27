import React, { useEffect, useState } from 'react'
import { IDataInterface } from '../interfaces/dataInterface'
const useSearchNumbers = () => {

  const [search, setSearch] = useState<string[]>([])
  const [coincidences, setCoincidences] = useState<IDataInterface[]>([])
  const coincidence: IDataInterface[] = []

  const formatNumbersToSearch = (numbers: string) => {
    const numbersArray = numbers.trim().split('\n')
    setSearch(numbersArray)
    console.log(search);
  }

  const searchConincidences = (data: IDataInterface[]) => {

    data.map((item) => {
      search.map((number) => {
        if (item.employeeId === number) {
          coincidence.push(item)
        }
      })
    })
    console.log(coincidence);
    setCoincidences(coincidence);
  }

  return {
    search,
    coincidences,
    formatNumbersToSearch,
    searchConincidences
  }
}

export default useSearchNumbers