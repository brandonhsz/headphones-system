import React from 'react'

interface IProps {
  link?: string
  title: string
}

const NavItem = ({ link = "#", title }: IProps) => {
  return (
    <>
      <a
        className="text-gray-30 hover:text-white hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
        href={link}
      >
        {title}
      </a>
    </>
  )
}

export default NavItem