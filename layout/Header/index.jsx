import React from 'react'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white py-3 shadow ">
        <div className="relative mx-auto flex w-full items-center justify-between">
        <div className="px-2 lg:px-8">
          search box
        </div>
        <div className="px-2 lg:px-10">
          {/* <UserInfo client={client} /> */}
          user info
        </div>
      </div>
    </div>
  )
}

export default Header