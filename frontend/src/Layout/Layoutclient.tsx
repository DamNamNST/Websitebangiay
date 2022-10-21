import { Footer, Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'



const Layoutclient = () => {
  return (
    <div>

        <main>
            <Outlet />
        </main>
        <footer> <Footer/></footer>


    </div>


  )
}

export default Layoutclient