import React, { useEffect } from 'react'
import { useDataStore } from '../../stores/data.store';

interface IProps {
  title: string
}

const HeaderTable = ({ title }: IProps) => {

  const { setFilter, filter } = useDataStore()

  return (
    <>
      <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
        <h2 className="text-2xl leading-tight">{title}</h2>
        <div className="text-end">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Filter'
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder={'Search'}
                value={filter.toUpperCase()}
                onChange={(e) => setFilter(e.target.value)}

              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                setFilter(filter)
              }}
            >
              Filter
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default HeaderTable