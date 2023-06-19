import React from 'react'

const Logo = ({active}) => {
  return (
    <div className="w-full text-center">
      <h1
        className={`${
          active ? 'block' : 'lg:block hidden'
        } text-2xl cursor-pointer font-bold `}
      >
        Dashboard
      </h1>

      <h1
        className={`${
          active ? 'hidden' : 'lg:hidden block'
        } text-2xl cursor-pointer font-bold `}
      >
        D
      </h1>
    </div>
  )
}

export default Logo