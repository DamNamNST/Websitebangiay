<<<<<<< HEAD
import { Footer, Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

=======
<<<<<<< HEAD
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
>>>>>>> f09b540c52de4f2762f436f7d00eb412c3fb0c5a

=======
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
>>>>>>> e4e366c3af73704fb85bb381af652ce10eef4fa1

const Layoutclient = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

<<<<<<< HEAD
        <main>
            <Outlet />
        </main>
        <footer> <Footer/></footer>


=======
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
>>>>>>> f09b540c52de4f2762f436f7d00eb412c3fb0c5a
    </div>
  );
};

export default Layoutclient;
