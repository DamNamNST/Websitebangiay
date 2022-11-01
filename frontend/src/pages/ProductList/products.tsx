import React from 'react'

import './productlist.css';


import { Link } from 'react-router-dom';


import './productlist.css';

type Props = {}

const Products = (props: Props) => {
    return (
        <div>

            <div className="shop-page-title category-page-title page-title ">
                <div className="page-title-inner flex-row  medium-flex-wrap container">
                    <div className="flex-col flex-grow medium-text-center">
                        <div className="is-large">
                            <nav className="woocommerce-breadcrumb breadcrumbs"><a href="">Trang chủ</a> <span className="divider">/</span> Nữ</nav></div>
                        <div className="category-filtering category-filter-row show-for-medium">
                            <Link to="#" data-open="#shop-sidebar" data-visible-after="true" data-pos="left" className="filter-button uppercase plain" />
                            <i className="icon-menu" />

                            <strong >Lọc</strong>


                            <strong>Lọc</strong>

                            <strong >Lọc</strong>

                            <div className="inline-block">
                                <div className="widget woocommerce widget_layered_nav_filters"><ul><li className="chosen"><a rel="nofollow" aria-label="Xóa bộ lọc" href="" className="tooltipstered">Nhỏ nhất <span className="woocommerce-Price-amount amount">1,120,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></a></li><li className="chosen"><a rel="nofollow" aria-label="Xóa bộ lọc" href="" className="tooltipstered">Lớn nhất <span className="woocommerce-Price-amount amount">2,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></a></li></ul></div>	</div>
                        </div>
                    </div>{/* .flex-left */}
                    <div className="flex-col medium-text-center">
                        <p className="woocommerce-result-count hide-for-medium">
                            Hiển thị 1–12 trong 22 kết quả</p>
                        <form className="woocommerce-ordering" method="get">
                            <select name="orderby" className="orderby">
                                <option value="menu_order" style={{color:"black"}} >Thứ tự mặc định</option>
                                <option value="popularity" style={{color:"black"}}>Thứ tự theo mức độ phổ biến</option>
                                <option value="rating" style={{color:"black"}}>Thứ tự theo điểm đánh giá</option>
                                <option value="date" style={{color:"black"}}>Mới nhất</option>
                                <option value="price" style={{color:"black"}}>Thứ tự theo giá: thấp đến cao</option>
                                <option value="price-desc " style={{color:"black"}}>Thứ tự theo giá: cao xuống thấp</option>
                            </select>
                            <input type="hidden" name="paged" defaultValue={1} />
                            <input type="hidden" name="min_price" defaultValue={1120000} /><input type="hidden" name="max_price" defaultValue={2800000} /></form>
                    </div>{/* .flex-right */}
                </div>{/* flex-row */}
            </div>
            {/* main */}
            <main id="main" >
                <div className="row category-page-row">
                    <div className="col large-3 hide-for-medium ">
                        <div id="shop-sidebar" className="sidebar-inner col-inner">
                            <aside id="woocommerce_price_filter-2" className="widget woocommerce widget_price_filter"><span className="widget-title shop-sidebar">Lọc theo giá</span><div className="is-divider small" /><form method="get" action="">
                                <div className="price_slider_wrapper">
                                    <div className="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" style={{}}><div className="ui-slider-range ui-widget-header ui-corner-all" style={{ left: '0%', width: '100%' }} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{ left: '0%' }} /><span className="ui-slider-handle ui-state-default ui-corner-all ui-state-hover" tabIndex={0} style={{ left: '100%' }} /></div>
                                    <div className="price_slider_amount">
                                        <input type="text" id="min_price" name="min_price" defaultValue={1120000} data-min={1120000} placeholder="Giá thấp nhất" style={{ display: 'none' }} />
                                        <input type="text" id="max_price" name="max_price" defaultValue={2800000} data-max={2800000} placeholder="Giá cao nhất" style={{ display: 'none' }} />
                                        <button type="submit" className="button" style={{ color: '#fff' }}>Lọc</button>
                                        <div className="price_label" style={{}}>
                                            Giá <span className="from">1,120,000&nbsp;₫</span> — <span className="to">2,800,000&nbsp;₫</span>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </form></aside><aside id="woocommerce_products-3" className="widget woocommerce widget_products"><span className="widget-title shop-sidebar">Sản phẩm</span><div className="is-divider small" /><ul className="product_list_widget"><li>
                                <a href="">
                                    <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">Chuck 70 Psy-Kicks Ox</span>
                                </a>
                                <span className="woocommerce-Price-amount amount">2,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
                            </li>
                                <li>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-4/">
                                                <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />
                                            </a>
                                        </div>

                                        <div style={{ marginLeft: 40 }}>
                                            <span className="">Thanh dúc</span>
                                            <br />
                                            <div style={{ marginTop: 40 }}>
                                                <span >2,800,000&nbsp;<span className="">₫</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-8/">
                                        <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">One Star Sunbaked</span>
                                    </a>
                                    <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
                                </li>
                                <li>
                                    <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-7/">
                                        <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">One Star Sunbaked</span>
                                    </a>
                                    <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
                                </li>
                                <li>
                                    <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-6/">
                                        <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"

                                            srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">One Star Sunbaked</span>
                                    </a>
                                    <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
                                </li>
                            </ul></aside>		<aside id="flatsome_recent_posts-2" className="widget flatsome_recent_posts">		<span className="widget-title shop-sidebar">Bài viết mới nhất</span><div className="is-divider small" />		<ul>
                                <li className="recent-blog-posts-li">
                                    <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                                        <div className="flex-col mr-half">
                                            <div className="badge post-date  badge-circle">
                                                <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-150x150.jpg)', border: 0 }}>
                                                </div>
                                            </div>
                                        </div>{/* .flex-col */}
                                        <div className="flex-col flex-grow">
                                            <a href="http://mauweb.monamedia.net/converse/duis-luctus-elit-nisi-et-cursus-magna-pellentesque-non/" title="Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?">Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?</a>
                                            <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/duis-luctus-elit-nisi-et-cursus-magna-pellentesque-non/#respond" /></span>
                                        </div>
                                    </div>{/* .flex-row */}
                                </li>
                                <li className="recent-blog-posts-li">
                                    <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                                        <div className="flex-col mr-half">
                                            <div className="badge post-date  badge-circle">
                                                <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-2-150x150.jpg)', border: 0 }}>
                                                </div>
                                            </div>
                                        </div>{/* .flex-col */}
                                        <div className="flex-col flex-grow">
                                            <a href="http://mauweb.monamedia.net/converse/mauris-tristique-pretium-tempus-vestibulum-et-accumsan-magna/" title="Xinh xắn nhất những ngày này là những mẫu giày của các chàng trai BTS hợp tác cùng Converse">Xinh xắn nhất những ngày này là những mẫu giày của các chàng trai BTS hợp tác cùng Converse</a>
                                            <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/mauris-tristique-pretium-tempus-vestibulum-et-accumsan-magna/#respond" /></span>
                                        </div>
                                    </div>{/* .flex-row */}
                                </li>
                                <li className="recent-blog-posts-li">
                                    <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                                        <div className="flex-col mr-half">
                                            <div className="badge post-date  badge-circle">
                                                <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-3-150x150.jpg)', border: 0 }}>
                                                </div>
                                            </div>
                                        </div>{/* .flex-col */}
                                        <div className="flex-col flex-grow">
                                            <a href="http://mauweb.monamedia.net/converse/aliquam-placerat-nisl-nec-imperdiet-vehicula-phasellus-tempus-ligula-id-orci-finibus-feugiat/" title="Fashionista Việt đua nhau sống “ngược” theo trào lưu “ChucksFirst? Bạn dám không?”">Fashionista Việt đua nhau sống “ngược” theo trào lưu “ChucksFirst? Bạn dám không?”</a>
                                            <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/aliquam-placerat-nisl-nec-imperdiet-vehicula-phasellus-tempus-ligula-id-orci-finibus-feugiat/#respond" /></span>
                                        </div>
                                    </div>{/* .flex-row */}
                                </li>
                                <li className="recent-blog-posts-li">
                                    <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                                        <div className="flex-col mr-half">
                                            <div className="badge post-date  badge-circle">
                                                <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-4-150x150.jpg)', border: 0 }}>
                                                </div>
                                            </div>
                                        </div>{/* .flex-col */}
                                        <div className="flex-col flex-grow">
                                            <a href="http://mauweb.monamedia.net/converse/in-rutrum-tempus-purus-ut-euismod-dui-facilisis-ac-fusce-semper-dignissim-diam-a-egestas/" title="Comme des Garçons Play x Converse nhá hàng mẫu giày mới, dự kiến ra mắt vào cuối tháng này">Comme des Garçons Play x Converse nhá hàng mẫu giày mới, dự kiến ra mắt vào cuối tháng này</a>
                                            <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/in-rutrum-tempus-purus-ut-euismod-dui-facilisis-ac-fusce-semper-dignissim-diam-a-egestas/#respond" /></span>
                                        </div>
                                    </div>{/* .flex-row */}
                                </li>
                                <li className="recent-blog-posts-li">
                                    <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                                        <div className="flex-col mr-half">
                                            <div className="badge post-date  badge-circle">
                                                <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-5-150x150.png)', border: 0 }}>
                                                </div>
                                            </div>
                                        </div>{/* .flex-col */}
                                        <div className="flex-col flex-grow">
                                            <a href="http://mauweb.monamedia.net/converse/donec-tempus-eu-ligula-sed-blandit-vivamus-vel-enim-ac-quam-iaculis-rutrum/" title="Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like của nhóc tì mẫu giáo">Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like của nhóc tì mẫu giáo</a>
                                            <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/donec-tempus-eu-ligula-sed-blandit-vivamus-vel-enim-ac-quam-iaculis-rutrum/#respond" /></span>
                                        </div>
                                    </div>{/* .flex-row */}
                                </li>
                            </ul>		</aside>			</div>{/* .sidebar-inner */}
                    </div>{/* #shop-sidebar */}
                    <div className="col large-9">
                        <div className="shop-container">
                            <div className="woocommerce-notices-wrapper" />	<div className="products row row-small large-columns-4 medium-columns-3 small-columns-2 has-shadow row-box-shadow-1 row-box-shadow-2-hover">


                                <div className="product-small col has-hover post-922 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-psy-kicks-nu instock shipping-taxable purchasable product-type-simple">
                                    <div className="col-inner">
                                        <div className="badge-container absolute left top z-1">
                                        </div>
                                        <div className="product-small box ">
                                            <div className="box-image">
                                                <div className="image-fade_in_back">
                                                    <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">
                                                        <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
                                                </div>
                                                <div className="image-tools is-small top right show-on-hover">
                                                </div>
                                                <div className="image-tools is-small hide-for-small bottom left show-on-hover">
                                                </div>
                                                <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
                                                </div>
                                            </div>{/* box-image */}
                                            <div className="box-text box-text-products text-center grid-style-2">
                                                <div className="title-wrapper">
                                                    <p className="name product-title">
                                                        <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">Chuck 70 Psy-Kicks Ox</a>
                                                    </p>
                                                </div>
                                                <div className="price-wrapper">
                                                    <span className="price">
                                                        <span className="woocommerce-Price-amount amount">1,800,000&nbsp;
                                                            <span className="woocommerce-Price-currencySymbol">₫</span>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="add-to-cart-button">
                                                    <a href="/converse/danh-muc/nu/?min_price=1120000&add-to-cart=922" rel="nofollow" data-product_id={922} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small" style={{ width: '140px', color: '#fff' }}>Thêm vào giỏ</a>
                                                </div>
                                            </div>{/* box-text */}

                                        </div>{/* box */}

                                    </div>{/* .col-inner */}

                                </div>{/* col */}
                                <div className="product-small col has-hover post-922 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-psy-kicks-nu instock shipping-taxable purchasable product-type-simple">
                                    <div className="col-inner">
                                        <div className="badge-container absolute left top z-1">
                                        </div>
                                        <div className="product-small box ">
                                            <div className="box-image">
                                                <div className="image-fade_in_back">
                                                    <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">
                                                        <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
                                                </div>
                                                <div className="image-tools is-small top right show-on-hover">
                                                </div>
                                                <div className="image-tools is-small hide-for-small bottom left show-on-hover">
                                                </div>
                                                <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
                                                </div>
                                            </div>{/* box-image */}
                                            <div className="box-text box-text-products text-center grid-style-2">
                                                <div className="title-wrapper">
                                                    <p className="name product-title">
                                                        <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">Chuck 70 Psy-Kicks Ox</a>
                                                    </p>
                                                </div>
                                                <div className="price-wrapper">
                                                    <span className="price">
                                                        <span className="woocommerce-Price-amount amount">1,800,000&nbsp;
                                                            <span className="woocommerce-Price-currencySymbol">₫</span>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="add-to-cart-button">
                                                    <a href="/converse/danh-muc/nu/?min_price=1120000&add-to-cart=922" rel="nofollow" data-product_id={922} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small" style={{ width: '140px', color: '#fff' }}>Thêm vào giỏ</a>
                                                </div>
                                            </div>{/* box-text */}

                                        </div>{/* box */}

                                    </div>{/* .col-inner */}

                                </div>{/* col */}
                                <div className="product-small col has-hover post-922 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-psy-kicks-nu instock shipping-taxable purchasable product-type-simple">
                                    <div className="col-inner">
                                        <div className="badge-container absolute left top z-1">
                                        </div>
                                        <div className="product-small box ">
                                            <div className="box-image">
                                                <div className="image-fade_in_back">
                                                    <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">
                                                        <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
                                                </div>
                                                <div className="image-tools is-small top right show-on-hover">
                                                </div>
                                                <div className="image-tools is-small hide-for-small bottom left show-on-hover">
                                                </div>
                                                <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
                                                </div>
                                            </div>{/* box-image */}
                                            <div className="box-text box-text-products text-center grid-style-2">
                                                <div className="title-wrapper">
                                                    <p className="name product-title">
                                                        <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">Chuck 70 Psy-Kicks Ox</a>
                                                    </p>
                                                </div>
                                                <div className="price-wrapper">
                                                    <span className="price">
                                                        <span className="woocommerce-Price-amount amount">1,800,000&nbsp;
                                                            <span className="woocommerce-Price-currencySymbol">₫</span>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="add-to-cart-button">
                                                    <a href="/converse/danh-muc/nu/?min_price=1120000&add-to-cart=922" rel="nofollow" data-product_id={922} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small" style={{ width: '140px', color: '#fff' }}>Thêm vào giỏ</a>
                                                </div>
                                            </div>{/* box-text */}

                                        </div>{/* box */}

                                    </div>{/* .col-inner */}

                                </div>{/* col */}
                                <div className="product-small col has-hover post-922 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-psy-kicks-nu instock shipping-taxable purchasable product-type-simple">
                                    <div className="col-inner">
                                        <div className="badge-container absolute left top z-1">
                                        </div>
                                        <div className="product-small box ">
                                            <div className="box-image">
                                                <div className="image-fade_in_back">
                                                    <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">
                                                        <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
                                                </div>
                                                <div className="image-tools is-small top right show-on-hover">
                                                </div>
                                                <div className="image-tools is-small hide-for-small bottom left show-on-hover">
                                                </div>
                                                <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
                                                </div>
                                            </div>{/* box-image */}
                                            <div className="box-text box-text-products text-center grid-style-2">
                                                <div className="title-wrapper">
                                                    <p className="name product-title">
                                                        <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">Chuck 70 Psy-Kicks Ox</a>
                                                    </p>
                                                </div>
                                                <div className="price-wrapper">
                                                    <span className="price">
                                                        <span className="woocommerce-Price-amount amount">1,800,000&nbsp;
                                                            <span className="woocommerce-Price-currencySymbol">₫</span>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="add-to-cart-button">
                                                    <a href="/converse/danh-muc/nu/?min_price=1120000&add-to-cart=922" rel="nofollow" data-product_id={922} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small" style={{ width: '140px', color: '#fff' }}>Thêm vào giỏ</a>
                                                </div>
                                            </div>{/* box-text */}

                                        </div>{/* box */}

                                    </div>{/* .col-inner */}

                                </div>{/* col */}
                            </div>
                        </div>{/* shop container */}
                    </div>
                </div>
            </main>

        </div>



    )
}

export default Products