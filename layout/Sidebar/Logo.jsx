import React from 'react'

const Logo = ({active}) => {
  return (
    <div className="w-full text-center px-2">
      <h1
        className={`${
          active ? 'block' : 'lg:block hidden'
        } w-[150px] mx-auto`}
      >
        <img src='../images/fourbit-logo.png'/>
      </h1>

      <h1
        className={`${
          active ? 'hidden' : 'lg:hidden block'
        } text-2xl cursor-pointer font-bold `}
      >
        I
      </h1>
    </div>
  )
}

export default Logo