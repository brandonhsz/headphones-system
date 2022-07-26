import React from 'react'

interface IProps {
  link?: string
  title: string
}

const NavItem = ({ link = "#", title }: IProps) => {
  return (
    <>
      <a href={link}>{title}</a>
    </>
  )
}

export default NavItem