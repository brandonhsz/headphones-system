import React from 'react'

interface IProps {
  link?: string
  title: string
}

const NavItem = ({ link = "#", title }: IProps) => {
  return (
    <>
      <a
        className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        href={link}
      >
        {title}
      </a>
    </>
  )
}

export default NavItem