import React from 'react'

interface IProps {
  placeholder: string
  name: string
}

const Input = ({ placeholder, name }: IProps) => {
  return (
    <>
      <input type="text" name={name} className='mb-6 p-1 rounded-xl text-black' placeholder={placeholder} />
    </>
  )
}

export default Input