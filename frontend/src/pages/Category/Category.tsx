<<<<<<< HEAD
import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './Category.css'

type Props = {}
=======
import React from "react";
import "./Category.css";
type Props = {};
>>>>>>> f09b540c52de4f2762f436f7d00eb412c3fb0c5a

const Category = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto text-white grid md:grid-cols-3 grid-cols-1 gap-4 pt-10  ">
      <div className="box  text-center">
        <div className="flex justify-center">
          <img
            className=""
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/title_block_05.png"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/product_block_03.jpg"
            alt=""
          />
        </div>
        <button className="xemthem">Xem Sản Phẩm</button>

        <div className="showbox slideright">box 1</div>
      </div>
      <div className="box  text-center">
        <div className="flex justify-center">
          <img
            className=""
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/title_block_05.png"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/product_block_03.jpg"
            alt=""
          />
        </div>
        <button className="xemthem">Xem Sản Phẩm</button>
        <div className="showbox slideright">box 1</div>
      </div>
      <div className="box  text-center">
        <div className="flex justify-center">
          <img
            className=""
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/title_block_05.png"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/product_block_03.jpg"
            alt=""
          />
        </div>
        <button className="xemthem">Xem Sản Phẩm</button>
        <div className="showbox slideright">box 1</div>
      </div>
    </div>
  );
};

export default Category;
