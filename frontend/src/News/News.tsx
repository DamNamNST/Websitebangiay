import React from 'react'

type Props = {}

const News = (props: Props) => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row pt-10'>
            <div className="new-left  md:w-[30%] w-[100%]">
                <form action="">
                    <input type="text" name="" id="" className="w-[70%]" placeholder="tìm kiếm" /><button id="bt-gui" type="submit">Tìm Kiếm</button>
                </form>
                <span className="widget-title  text-black"><span>Bài viết mới</span></span>
           
            </div>
            <div className="new-right w-[70%]">
                a
            </div>
        </div>
    )
}

export default News