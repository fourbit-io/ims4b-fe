import React from 'react'

const Logo = ({active}) => {
  return (
    <div className="w-full text-center px-2">
      <h1
        className={`${
          active ? 'block' : 'lg:block hidden'
        } text-2xl cursor-pointer font-extrabold py-2 border-2 border-green-400 rounded-md bg-green-400 text-white`}
      >
        Inventory
        {/* <img src='./images/home-logo.png'/> */}
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