import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


const Layoutclient = () => {
  return (
    <div>
<<<<<<< HEAD
       <header>đây là header aaaaaaaaaa</header>
      <h1>Đức Mt</h1>
       <header>đây là header</header>
=======


       <header><Header/></header>

       
>>>>>>> ducmt
        <main>
            <Outlet />
        </main>
        <footer> <Footer/></footer>


    </div>


  )
}

export default Layoutclient