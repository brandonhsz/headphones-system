import React from 'react'
import NavItem from './NavItem'

const Nav = () => {
  return (
    <nav className='flex justify-around'>
      <NavItem
        title='Activas'
        link='/active'
      />
      <NavItem
        title='Bajas'
        link='/bajas'
      />

      <NavItem
        title='Stock'
      />
    </nav>
  )
}

export default Nav