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

const Layoutclient = () => {
  return (
    <div>
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

        <main>
            <Outlet />
        </main>
        <footer> <Footer/></footer>


>>>>>>> origin/ducmt
    </div>
  );
};

export default Layoutclient;
