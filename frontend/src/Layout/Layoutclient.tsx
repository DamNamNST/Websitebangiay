<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
=======
import { Footer, Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'


>>>>>>> origin/ducmt
=======
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

>>>>>>> f7a2901c229e46f549d8640ef655815bb784a7a3

const Layoutclient = () => {
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
=======

=======


       <header><Header/></header>

       
>>>>>>> f7a2901c229e46f549d8640ef655815bb784a7a3
        <main>
            <Outlet />
        </main>
        <footer> <Footer/></footer>


<<<<<<< HEAD
>>>>>>> origin/ducmt
=======
>>>>>>> f7a2901c229e46f549d8640ef655815bb784a7a3
    </div>
  );
};

export default Layoutclient;
