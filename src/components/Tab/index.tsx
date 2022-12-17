import React from 'react'

// HOW TO USE //
// <Tab>Your Text/Component Here</Tab>

const Tab = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <button className="px-2 py-2 lg:text-[20px] sm:text-[12px] font-varela bg-yellow300 relative">
      <div className="folded"></div>
      {children}
    </button>
  )
}
export default Tab
