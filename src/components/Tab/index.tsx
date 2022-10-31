import React from 'react'

// HOW TO USE //

const Tab = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <button className='px-2 py-2 text-xl font-varela bg-yellow300 relative'>
      <div className='folded'></div>
      {children}
    </button>
  )
}
export default Tab
