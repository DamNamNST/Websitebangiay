<<<<<<< HEAD
import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layoutclient from './pages/Layout/Layoutclient';
import About from './pages/About/About';
import Products from './pages/ProductList/products';
import Lienhe from './pages/lienhe';
import SingInUp from './pages/SingInUp/SingInUp';
import { ICategori } from './models/Categories';
import { IUsers } from './models/User';
import { listUser } from './api/User';
import { listCategory } from './api/Categories';
import Cart from './pages/Website/Cart/Cart';
import Pay from './pages/Website/Pay/Pay';

import Categories from './pages/admin/Categories/Categories';
import CategoriesAdd from './pages/admin/Categories/CategoriesAdd';
import CategoriesEdit from './pages/admin/Categories/CategoriesEdit';
import Users from './pages/admin/User/User';
import UserAdd from './pages/admin/User/UserAdd';
import UserEdit from './pages/admin/User/UserEdit';
import ErrorsWeb from './pages/404/errorsWeb';
import DetailProduct from './pages/detailProduct';
import Blog from './pages/admin/Blog/Blog';
import BlogAdd from './pages/admin/Blog/BlogAdd';
import BlogEdit from './pages/admin/Blog/BlogEdit';
import Comment from './pages/admin/Comment/Comment';
import CommentAdd from './pages/admin/Comment/CommentAdd';
import CommentEdit from './pages/admin/Comment/CommentEdit';
import AdminLayout from './Layout/AdminLayout';
=======
import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layoutclient from "./pages/Layout/Layoutclient";
import "antd/dist/antd.css";
import About from "./pages/About/About";
import Products from "./pages/ProductList/products";
import Lienhe from "./pages/lienhe";
import { ICategori } from "./models/Categories";
import { IUsers } from "./models/User";
import { listUser } from "./api/User";
import { listCategory } from "./api/Categories";
import Cart from "./pages/Website/Cart/Cart";
import Pay from "./pages/Website/Pay/Pay";
import ErrorsWeb from "./pages/404/errorsWeb";
import NewsPage from "./pages/News/News";
import NewsDetail from "./pages/News/Newsdetail";
import Purchased from "./pages/Purchased";

>>>>>>> f09b540c52de4f2762f436f7d00eb412c3fb0c5a

function App() {
  const [user, setUser] = useState<IUsers[]>([]);
  const [categories, setCategories] = useState<ICategori[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await listUser();
      setUser(data);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <Routes>
<<<<<<< HEAD
      <Route path={'/'} element={< Layoutclient />}>
        <Route index element={< Homepage />} />
        <Route path={"/about"} element={< About />} />
        <Route path={"/products"} element={< Products />} />

        <Route path='/lienhe' element={<Lienhe />} />
        <Route path='/login' element={<SingInUp />} />
        <Route path={"/detail"} element={< DetailProduct />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pay' element={<Pay />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        {/* <Route index element={<Dashbroad />} /> */}
        <Route path="categories">
          <Route index element={<Categories categories={categories} />} />
          <Route path="add" element={<CategoriesAdd />} />
          <Route path=":id/edit" element={<CategoriesEdit />} />
        </Route>
        <Route path="user">
          <Route index element={<Users user={user} />} />
          <Route path="add" element={<UserAdd />} />
          <Route path=":id/edit" element={<UserEdit />} />
        </Route>
        <Route path='Blog'>
          <Route index element={<Blog />} />
          <Route path='add' element={<BlogAdd />} />
          <Route path='edit/:id' element={<BlogEdit />} />
        </Route>
        <Route path='comment'>
          <Route index element={<Comment />} />
          <Route path='add' element={<CommentAdd />} />
          <Route path='edit/:id' element={<CommentEdit />} />
        </Route>



=======
      <Route path={"/"} element={<Layoutclient />}>
        <Route index element={<Homepage />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/lienhe"} element={<Lienhe />} />
        <Route path="news">
          <Route index element={<NewsPage />} />
          {/* <Route path=":_id" element={< NewsDetail/>} /> */}
        </Route>
        <Route path={"/newsdetail"} element={<NewsDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pay" element={<Pay />} />
        <Route path="purchased" element={<Purchased />} />
>>>>>>> f09b540c52de4f2762f436f7d00eb412c3fb0c5a
      </Route>
      <Route path="*" element={<ErrorsWeb />} />
    </Routes>
  );
}

export default App;
