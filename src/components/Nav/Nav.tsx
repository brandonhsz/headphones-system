import React from 'react'
import NavItem from './NavItem'

const Nav = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="h-8 w-8" src="https://www.tailwind-kit.com/icons/rocket.svg" alt="Workflow" />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                  <NavItem
                    title='Diademas Activas'
                    link="/active"
                  />

                  <NavItem
                    title='Diademas Bajas'
                    link="/bajas"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Nav