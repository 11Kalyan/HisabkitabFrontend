import Sidebar from '@/component/sidebar/Sidebar'
import * as React from 'react'

// components
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex h-screen w-screen m-0 p-0">
    <Sidebar />
    <main className="flex-1 overflow-auto bg-white">
      <Outlet />
    </main>
  </div>
  )
}

export default Layout