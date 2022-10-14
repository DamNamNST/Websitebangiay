import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


const Layoutclient = () => {
  return (
    <div>
       <header>đây là header aaaaaaaaaa</header>
      <h1> Viejt anh test</h1>
       <header>đây là header</header>


       <header><Header/></header>

       
        <main>
            <Outlet />
        </main>
        <footer> <Footer/></footer>


    </div>


  )
}

export default Layoutclient