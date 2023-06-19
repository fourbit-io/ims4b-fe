import React, { useState } from 'react'

const Sidebar = () => {
    const [active, setActive] = useState(false);
  return (
    <div className={`${
        active ? 'fixed !z-[9999] w-[200px]' : 'w-[0px]'
      }  h-100vh flex flex-col  items-center py-8 transition-all duration-150 lg:w-[250px] lg:py-5 bg-gray-100`}>Sidebar</div>
  )
}

export default Sidebar