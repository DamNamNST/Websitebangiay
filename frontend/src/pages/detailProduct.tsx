// import React from 'react'

// type Props = {}

// const detailProduct = (props: Props) => {
//     return (
//         <>
//             <div className="product-container">
//                 <div className="product-main">
//                     <div className="row content-row mb-0">
//                         <div className="product-gallery large-6 col">
//                             <div className="product-images relative mb-half has-hover woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns={4} style={{ opacity: 1 }}>
//                                 <div className="badge-container is-larger absolute left top z-1">
//                                 </div>
//                                 <div className="image-tools absolute top show-on-hover right z-3">
//                                 </div>
//                                 <figure className="woocommerce-product-gallery__wrapper product-gallery-slider slider slider-nav-small mb-half flickity-enabled" data-flickity-options="{
//           &quot;cellAlign&quot;: &quot;center&quot;,
//           &quot;wrapAround&quot;: true,
//           &quot;autoPlay&quot;: false,
//           &quot;prevNextButtons&quot;:true,
//           &quot;adaptiveHeight&quot;: true,
//           &quot;imagesLoaded&quot;: true,
//           &quot;lazyLoad&quot;: 1,
//           &quot;dragThreshold&quot; : 15,
//           &quot;pageDots&quot;: false,
//           &quot;rightToLeft&quot;: false       }" tabIndex={0}>
//                                     <div className="flickity-viewport" style={{ height: '82.675px', touchAction: 'pan-y' }}><div className="flickity-slider" style={{ left: 0, transform: 'translateX(0%)' }}><div data-thumb="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-100x100.jpg" className="woocommerce-product-gallery__image slide first is-selected" aria-selected="true" style={{ position: 'absolute', left: '0%' }}><a href="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07.jpg"><img width={600} height={384} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-600x384.jpg" className="wp-post-image skip-lazy" title="women-chuck-07" data-caption data-src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07.jpg" data-large_image="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07.jpg" data-large_image_width={1500} data-large_image_height={960} srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-600x384.jpg 600w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-300x192.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-768x492.jpg 768w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1024x655.jpg 1024w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07.jpg 1500w" sizes="(max-width: 600px) 100vw, 600px" /></a></div></div></div><button className="flickity-button flickity-prev-next-button previous" type="button" disabled aria-label="Previous"><svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" /></svg></button><button className="flickity-button flickity-prev-next-button next" type="button" disabled aria-label="Next"><svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) " /></svg></button></figure>
//                                 <div className="image-tools absolute bottom left z-3">
//                                     <a href="#product-zoom" className="zoom-button button is-outline circle icon tooltip hide-for-small tooltipstered">
//                                         <i className="icon-expand" />  </a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="product-info summary col-fit col entry-summary product-summary">
//                             <nav className="woocommerce-breadcrumb breadcrumbs"><a href="http://mauweb.monamedia.net/converse">Trang chủ</a> <span className="divider">/</span> <a href="http://mauweb.monamedia.net/converse/danh-muc/nu/">Nữ</a> <span className="divider">/</span> <a href="http://mauweb.monamedia.net/converse/danh-muc/nu/chuck-07s-nu/">Chuck 07s</a></nav><h1 className="product-title product_title entry-title">
//                                 Chuck 70 Archive Prints Hi</h1>
//                             <div className="is-divider small" />
//                             <ul className="next-prev-thumbs is-small show-for-medium">         <li className="prod-dropdown has-dropdown">
//                                 <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-9/" rel="next" className="button icon is-outline circle">
//                                     <i className="icon-angle-left" />            </a>
//                                 <div className="nav-dropdown">
//                                     <a title="Chuck Taylor Classic" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-9/">
//                                         <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-8-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-8-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-8-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" /></a>
//                                 </div>
//                             </li>
//                                 <li className="prod-dropdown has-dropdown">
//                                     <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/" rel="next" className="button icon is-outline circle">
//                                         <i className="icon-angle-right" />            </a>
//                                     <div className="nav-dropdown">
//                                         <a title="Chuck Taylor All Star 70 Full Gator Hi" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/">
//                                             <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" /></a>
//                                     </div>
//                                 </li>
//                             </ul><div className="price-wrapper">
//                                 <p className="price product-page-price ">
//                                     <span className="woocommerce-Price-amount amount">1,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></p>
//                             </div>
//                             <form className="cart" action="http://mauweb.monamedia.net/converse/san-pham/chuck-70-archive-prints-hi-2/" method="post" encType="multipart/form-data">
//                                 <div className="quantity buttons_added">
//                                     <input type="button" defaultValue="-" className="minus button is-form" />		<label className="screen-reader-text" htmlFor="quantity_6342a6ad91a60">Số lượng</label>
//                                     <input type="number" id="quantity_6342a6ad91a60" className="input-text qty text" step={1} min={1} max={9999} name="quantity" defaultValue={1} title="SL" size={4} pattern="[0-9]*" inputMode="numeric" aria-labelledby />
//                                     <input type="button" defaultValue="+" className="plus button is-form" />	</div>
//                                 <button type="submit" name="add-to-cart" value={897} className="single_add_to_cart_button button alt">Thêm vào giỏ</button>
//                             </form>
//                             <div className="row row-small" id="row-94707019">
//                                 <div className="col medium-6 small-12 large-6"><div className="col-inner">
//                                     <p><strong>Tính phí ship tự động</strong></p>
//                                     <div className="row large-columns-3 medium-columns- small-columns-2 row-xsmall">
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn.jpg" >            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn.jpg" className="attachment-original size-original" ids="338,339,340,341,342,343" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk.jpg" className="attachment-original size-original" ids="338,339,340,341,342,343" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van.jpg" className="attachment-original size-original" ids="338,339,340,341,342,343" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung.jpg" >            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung.jpg" className="attachment-original size-original" ids="338,339,340,341,342,343" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post.jpg" className="attachment-original size-original" ids="338,339,340,341,342,343" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post.jpg" className="attachment-original size-original" alt ids="338,339,340,341,342,343" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                     </div>
//                                 </div></div>
//                                 <div className="col medium-6 small-12 large-6"><div className="col-inner">
//                                     <p><strong>Thanh toán</strong></p>
//                                     <div className="row large-columns-3 medium-columns- small-columns-2 row-xsmall">
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb.jpg" className="attachment-original size-original" alt ids="348,345,347,346,344,349" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank.jpg" className="attachment-original size-original" alt ids="348,345,347,346,344,349" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib.jpg" className="attachment-original size-original" alt ids="348,345,347,346,344,349" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg" className="attachment-original size-original" alt ids="348,345,347,346,344,349" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal.jpg" className="attachment-original size-original" alt ids="348,345,347,346,344,349" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                         <div className="gallery-col col">
//                                             <div className="col-inner">
//                                                 <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard.jpg" title>            <div className="box has-hover gallery-box box-overlay dark">
//                                                     <div className="box-image">
//                                                         <img width={400} height={200} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard.jpg" className="attachment-original size-original" alt ids="348,345,347,346,344,349" col_spacing="xsmall" columns={3} image_size="original" image_overlay="rgba(255, 255, 255, 0)" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard-48x24.jpg 48w" sizes="(max-width: 400px) 100vw, 400px" />                                  <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                                         </div>
//                                                     </div>{/* .image */}
//                                                     <div className="box-text text-left">
//                                                         <p />
//                                                     </div>{/* .text */}
//                                                 </div>{/* .box */}
//                                                 </a>        </div>{/* .col-inner */}
//                                         </div>{/* .col */}
//                                     </div>
//                                 </div></div>
//                                 <div className="col small-12 large-12"><div className="col-inner">
//                                     <p><strong>"Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ động, kiếm tiền online"</strong></p>
//                                     <a href="http://mauweb.monamedia.net/converse/dang-ky-affilicate/" target="_self" className="button primary lowercase">
//                                         <span>Đăng ký Affilicate</span>
//                                     </a>
//                                 </div></div>
//                                 <style scope="scope" dangerouslySetInnerHTML={{ __html: "\n\n" }} />
//                             </div><div className="product_meta">
//                                 <span className="sku_wrapper">Mã: <span className="sku">163406C-1</span></span>
//                                 <span className="posted_in">Danh mục: <a href="http://mauweb.monamedia.net/converse/danh-muc/nu/chuck-07s-nu/" rel="tag">Chuck 07s</a>, <a href="http://mauweb.monamedia.net/converse/danh-muc/nu/" rel="tag">Nữ</a></span>
//                             </div>
//                         </div>{/* .summary */}
//                         <div id="product-sidebar" className="mfp-hide">
//                             <div className="sidebar-inner">
//                                 <div className="hide-for-off-canvas" style={{ width: '100%' }}><ul className="next-prev-thumbs is-small nav-right text-right">         <li className="prod-dropdown has-dropdown">
//                                     <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-9/" rel="next" className="button icon is-outline circle">
//                                         <i className="icon-angle-left" />            </a>
//                                     <div className="nav-dropdown">
//                                         <a title="Chuck Taylor Classic" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-9/">
//                                             <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-8-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image" alt srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-8-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-8-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" /></a>
//                                     </div>
//                                 </li>
//                                     <li className="prod-dropdown has-dropdown">
//                                         <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/" rel="next" className="button icon is-outline circle">
//                                             <i className="icon-angle-right" />            </a>
//                                         <div className="nav-dropdown">
//                                             <a title="Chuck Taylor All Star 70 Full Gator Hi" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/">
//                                                 <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image" alt srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" /></a>
//                                         </div>
//                                     </li>
//                                 </ul></div><aside id="woocommerce_products-2" className="widget woocommerce widget_products"><span className="widget-title shop-sidebar">Sản phẩm</span><div className="is-divider small" /><ul className="product_list_widget"><li>
//                                     <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-4/">
//                                         <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" alt srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">Chuck 70 Psy-Kicks Ox</span>
//                                     </a>
//                                     <span className="woocommerce-Price-amount amount">2,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                                 </li>
//                                     <li>
//                                         <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">
//                                             <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" alt srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">Chuck 70 Psy-Kicks Ox</span>
//                                         </a>
//                                         <span className="woocommerce-Price-amount amount">1,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                                     </li>
//                                     <li>
//                                         <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-8/">
//                                             <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" alt srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">One Star Sunbaked</span>
//                                         </a>
//                                         <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                                     </li>
//                                     <li>
//                                         <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-7/">
//                                             <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" alt srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">One Star Sunbaked</span>
//                                         </a>
//                                         <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                                     </li>
//                                     <li>
//                                         <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-6/">
//                                             <img width={100} height={100} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-100x100.jpg" className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" alt srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" />		<span className="product-title">One Star Sunbaked</span>
//                                         </a>
//                                         <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                                     </li>
//                                 </ul></aside>		<aside id="flatsome_recent_posts-3" className="widget flatsome_recent_posts">		<span className="widget-title shop-sidebar">Bài viết mới nhất</span><div className="is-divider small" />		<ul>
//                                     <li className="recent-blog-posts-li">
//                                         <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                                             <div className="flex-col mr-half">
//                                                 <div className="badge post-date  badge-circle">
//                                                     <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-150x150.jpg)', border: 0 }}>
//                                                     </div>
//                                                 </div>
//                                             </div>{/* .flex-col */}
//                                             <div className="flex-col flex-grow">
//                                                 <a href="http://mauweb.monamedia.net/converse/duis-luctus-elit-nisi-et-cursus-magna-pellentesque-non/" title="Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?">Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?</a>
//                                                 <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/duis-luctus-elit-nisi-et-cursus-magna-pellentesque-non/#respond" /></span>
//                                             </div>
//                                         </div>{/* .flex-row */}
//                                     </li>
//                                     <li className="recent-blog-posts-li">
//                                         <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                                             <div className="flex-col mr-half">
//                                                 <div className="badge post-date  badge-circle">
//                                                     <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-2-150x150.jpg)', border: 0 }}>
//                                                     </div>
//                                                 </div>
//                                             </div>{/* .flex-col */}
//                                             <div className="flex-col flex-grow">
//                                                 <a href="http://mauweb.monamedia.net/converse/mauris-tristique-pretium-tempus-vestibulum-et-accumsan-magna/" title="Xinh xắn nhất những ngày này là những mẫu giày của các chàng trai BTS hợp tác cùng Converse">Xinh xắn nhất những ngày này là những mẫu giày của các chàng trai BTS hợp tác cùng Converse</a>
//                                                 <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/mauris-tristique-pretium-tempus-vestibulum-et-accumsan-magna/#respond" /></span>
//                                             </div>
//                                         </div>{/* .flex-row */}
//                                     </li>
//                                     <li className="recent-blog-posts-li">
//                                         <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                                             <div className="flex-col mr-half">
//                                                 <div className="badge post-date  badge-circle">
//                                                     <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-3-150x150.jpg)', border: 0 }}>
//                                                     </div>
//                                                 </div>
//                                             </div>{/* .flex-col */}
//                                             <div className="flex-col flex-grow">
//                                                 <a href="http://mauweb.monamedia.net/converse/aliquam-placerat-nisl-nec-imperdiet-vehicula-phasellus-tempus-ligula-id-orci-finibus-feugiat/" title="Fashionista Việt đua nhau sống “ngược” theo trào lưu “ChucksFirst? Bạn dám không?”">Fashionista Việt đua nhau sống “ngược” theo trào lưu “ChucksFirst? Bạn dám không?”</a>
//                                                 <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/aliquam-placerat-nisl-nec-imperdiet-vehicula-phasellus-tempus-ligula-id-orci-finibus-feugiat/#respond" /></span>
//                                             </div>
//                                         </div>{/* .flex-row */}
//                                     </li>
//                                     <li className="recent-blog-posts-li">
//                                         <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                                             <div className="flex-col mr-half">
//                                                 <div className="badge post-date  badge-circle">
//                                                     <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-4-150x150.jpg)', border: 0 }}>
//                                                     </div>
//                                                 </div>
//                                             </div>{/* .flex-col */}
//                                             <div className="flex-col flex-grow">
//                                                 <a href="http://mauweb.monamedia.net/converse/in-rutrum-tempus-purus-ut-euismod-dui-facilisis-ac-fusce-semper-dignissim-diam-a-egestas/" title="Comme des Garçons Play x Converse nhá hàng mẫu giày mới, dự kiến ra mắt vào cuối tháng này">Comme des Garçons Play x Converse nhá hàng mẫu giày mới, dự kiến ra mắt vào cuối tháng này</a>
//                                                 <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/in-rutrum-tempus-purus-ut-euismod-dui-facilisis-ac-fusce-semper-dignissim-diam-a-egestas/#respond" /></span>
//                                             </div>
//                                         </div>{/* .flex-row */}
//                                     </li>
//                                     <li className="recent-blog-posts-li">
//                                         <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                                             <div className="flex-col mr-half">
//                                                 <div className="badge post-date  badge-circle">
//                                                     <div className="badge-inner bg-fill" style={{ background: 'url(http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-5-150x150.png)', border: 0 }}>
//                                                     </div>
//                                                 </div>
//                                             </div>{/* .flex-col */}
//                                             <div className="flex-col flex-grow">
//                                                 <a href="http://mauweb.monamedia.net/converse/donec-tempus-eu-ligula-sed-blandit-vivamus-vel-enim-ac-quam-iaculis-rutrum/" title="Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like của nhóc tì mẫu giáo">Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like của nhóc tì mẫu giáo</a>
//                                                 <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/donec-tempus-eu-ligula-sed-blandit-vivamus-vel-enim-ac-quam-iaculis-rutrum/#respond" /></span>
//                                             </div>
//                                         </div>{/* .flex-row */}
//                                     </li>
//                                 </ul>		</aside>		</div>{/* .sidebar-inner */}
//                         </div>
//                     </div>{/* .row */}
//                 </div>{/* .product-main */}
//                 <div className="product-footer">
//                     <div className="container">
//                         <div className="woocommerce-tabs container tabbed-content">
//                             <ul className="product-tabs small-nav-collapse tabs nav nav-uppercase nav-tabs nav-normal nav-left">
//                                 <li className="additional_information_tab active">
//                                     <a href="#tab-additional_information">Thông tin bổ sung</a>
//                                 </li>
//                                 <li className="reviews_tab">
//                                     <a href="#tab-reviews">Đánh giá (0)</a>
//                                 </li>
//                             </ul>
//                             <div className="tab-panels">
//                                 <div className="panel entry-content active" id="tab-additional_information">
//                                     <table className="shop_attributes">
//                                         <tbody><tr>
//                                             <th>SKU</th>
//                                             <td><p>163406C</p>
//                                             </td>
//                                         </tr>
//                                             <tr>
//                                                 <th>Chất liệu</th>
//                                                 <td><p>Textile</p>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <th>Giới tính</th>
//                                                 <td><p>Women</p>
//                                                 </td>
//                                             </tr>
//                                         </tbody></table>
//                                 </div>
//                                 <div className="panel entry-content " id="tab-reviews">
//                                     <div className="row" id="reviews">
//                                         <div className="col large-12" id="comments">
//                                             <h3 className="normal">Đánh giá</h3>
//                                             <p className="woocommerce-noreviews">Chưa có đánh giá nào.</p>
//                                         </div>
//                                         <div id="review_form_wrapper" className="large-12 col">
//                                             <div id="review_form" className="col-inner">
//                                                 <div className="review-form-inner has-border">
//                                                     <div id="respond" className="comment-respond">
//                                                         <h3 id="reply-title" className="comment-reply-title">Hãy là người đầu tiên nhận xét “Chuck 70 Archive Prints Hi” <small><a rel="nofollow" id="cancel-comment-reply-link" href="/converse/san-pham/chuck-70-archive-prints-hi-2/#respond" style={{ display: 'none' }}>Hủy</a></small></h3>			<form action="http://mauweb.monamedia.net/converse/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate>
//                                                             <div className="comment-form-rating"><label htmlFor="rating">Đánh giá của bạn</label><p className="stars"><span><a className="star-1" href="#">1</a><a className="star-2" href="#">2</a><a className="star-3" href="#">3</a><a className="star-4" href="#">4</a><a className="star-5" href="#">5</a></span></p><select name="rating" id="rating" required style={{ display: 'none' }}>
//                                                                 <option value>Xếp hạng…</option>
//                                                                 <option value={5}>Rất tốt</option>
//                                                                 <option value={4}>Tốt</option>
//                                                                 <option value={3}>Trung bình</option>
//                                                                 <option value={2}>Không tệ</option>
//                                                                 <option value={1}>Rất tệ</option>
//                                                             </select></div><p className="comment-form-comment"><label htmlFor="comment">Nhận xét của bạn&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} /></p><p className="comment-form-author"><label htmlFor="author">Tên&nbsp;<span className="required">*</span></label> <input id="author" name="author" type="text" defaultValue size={30} required /></p>
//                                                             <p className="comment-form-email"><label htmlFor="email">Email&nbsp;<span className="required">*</span></label> <input id="email" name="email" type="email" defaultValue size={30} required /></p>
//                                                             <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Gửi đi" /> <input type="hidden" name="comment_post_ID" defaultValue={897} id="comment_post_ID" />
//                                                                 <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
//                                                             </p>			</form>
//                                                     </div>{/* #respond */}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>{/* .tab-panels */}
//                         </div>{/* .tabbed-content */}
//                         <div className="related related-products-wrapper product-section">
//                             <h3 className="product-section-title container-width product-section-title-related pt-half pb-half uppercase">
//                                 Sản phẩm tương tự  </h3>
//                             <div className="row large-columns-5 medium-columns-3 small-columns-2 row-small slider row-slider slider-nav-reveal slider-nav-push flickity-enabled is-draggable" data-flickity-options="{&quot;imagesLoaded&quot;: true, &quot;groupCells&quot;: &quot;100%&quot;, &quot;dragThreshold&quot; : 5, &quot;cellAlign&quot;: &quot;left&quot;,&quot;wrapAround&quot;: true,&quot;prevNextButtons&quot;: true,&quot;percentPosition&quot;: true,&quot;pageDots&quot;: false, &quot;rightToLeft&quot;: false, &quot;autoPlay&quot; : false}" tabIndex={0}>
//                                 {/* col */}
//                                 {/* col */}
//                                 {/* col */}
//                                 {/* col */}
//                                 {/* col */}
//                                 {/* col */}
//                                 {/* col */}
//                                 {/* col */}
//                                 <div className="flickity-viewport" style={{ height: '322.2px', touchAction: 'pan-y' }}><div className="flickity-slider" style={{ left: 0, transform: 'translateX(-400%)' }}><div className="product-small col has-hover post-906 product type-product status-publish has-post-thumbnail product_cat-classic-nu product_cat-nu instock shipping-taxable purchasable product-type-simple is-selected" aria-selected="true" style={{ position: 'absolute', left: '400%' }}>
//                                     <div className="col-inner">
//                                         <div className="badge-container absolute left top z-1">
//                                         </div>
//                                         <div className="product-small box ">
//                                             <div className="box-image">
//                                                 <div className="image-fade_in_back">
//                                                     <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-15/">
//                                                         <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-2-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-2-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" alt />				</a>
//                                                 </div>
//                                                 <div className="image-tools is-small top right show-on-hover">
//                                                 </div>
//                                                 <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                                                 </div>
//                                                 <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                                                 </div>
//                                             </div>{/* box-image */}
//                                             <div className="box-text box-text-products text-center grid-style-2">
//                                                 <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-15/">Chuck Taylor Classic</a></p></div><div className="price-wrapper">
//                                                     <span className="price"><span className="woocommerce-Price-amount amount">1,250,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                                                 </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-70-archive-prints-hi-2/?add-to-cart=906" rel="nofollow" data-product_id={906} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                                         </div>{/* box */}
//                                     </div>{/* .col-inner */}
//                                 </div><div className="product-small col has-hover post-918 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-sunbaked-nu instock shipping-taxable purchasable product-type-simple is-selected" aria-selected="true" style={{ position: 'absolute', left: '450%' }}>
//                                         <div className="col-inner">
//                                             <div className="badge-container absolute left top z-1">
//                                             </div>
//                                             <div className="product-small box ">
//                                                 <div className="box-image">
//                                                     <div className="image-fade_in_back">
//                                                         <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-7/">
//                                                             <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" alt />				</a>
//                                                     </div>
//                                                     <div className="image-tools is-small top right show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                                                     </div>
//                                                 </div>{/* box-image */}
//                                                 <div className="box-text box-text-products text-center grid-style-2">
//                                                     <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-7/">One Star Sunbaked</a></p></div><div className="price-wrapper">
//                                                         <span className="price"><span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                                                     </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-70-archive-prints-hi-2/?add-to-cart=918" rel="nofollow" data-product_id={918} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                                             </div>{/* box */}
//                                         </div>{/* .col-inner */}
//                                     </div><div className="product-small col has-hover post-904 product type-product status-publish has-post-thumbnail product_cat-classic-nu product_cat-nu last instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '100%' }}>
//                                         <div className="col-inner">
//                                             <div className="badge-container absolute left top z-1">
//                                             </div>
//                                             <div className="product-small box ">
//                                                 <div className="box-image">
//                                                     <div className="image-fade_in_back">
//                                                         <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-13/">
//                                                             <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-4-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-4-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" alt />				</a>
//                                                     </div>
//                                                     <div className="image-tools is-small top right show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                                                     </div>
//                                                 </div>{/* box-image */}
//                                                 <div className="box-text box-text-products text-center grid-style-2">
//                                                     <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-13/">Chuck Taylor Classic</a></p></div><div className="price-wrapper">
//                                                         <span className="price"><span className="woocommerce-Price-amount amount">1,250,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                                                     </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-70-archive-prints-hi-2/?add-to-cart=904" rel="nofollow" data-product_id={904} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                                             </div>{/* box */}
//                                         </div>{/* .col-inner */}
//                                     </div><div className="product-small col has-hover post-896 product type-product status-publish has-post-thumbnail product_cat-chuck-07s-nu product_cat-nu first instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '150%' }}>
//                                         <div className="col-inner">
//                                             <div className="badge-container absolute left top z-1">
//                                             </div>
//                                             <div className="product-small box ">
//                                                 <div className="box-image">
//                                                     <div className="image-fade_in_back">
//                                                         <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/">
//                                                             <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt />				</a>
//                                                     </div>
//                                                     <div className="image-tools is-small top right show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                                                     </div>
//                                                 </div>{/* box-image */}
//                                                 <div className="box-text box-text-products text-center grid-style-2">
//                                                     <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/">Chuck Taylor All Star 70 Full Gator Hi</a></p></div><div className="price-wrapper">
//                                                         <span className="price"><span className="woocommerce-Price-amount amount">2,100,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                                                     </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-70-archive-prints-hi-2/?add-to-cart=896" rel="nofollow" data-product_id={896} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                                             </div>{/* box */}
//                                         </div>{/* .col-inner */}
//                                     </div><div className="product-small col has-hover post-903 product type-product status-publish has-post-thumbnail product_cat-classic-nu product_cat-nu instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '200%' }}>
//                                         <div className="col-inner">
//                                             <div className="badge-container absolute left top z-1">
//                                             </div>
//                                             <div className="product-small box ">
//                                                 <div className="box-image">
//                                                     <div className="image-fade_in_back">
//                                                         <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-12/">
//                                                             <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-5-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-5-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" alt />				</a>
//                                                     </div>
//                                                     <div className="image-tools is-small top right show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                                                     </div>
//                                                 </div>{/* box-image */}
//                                                 <div className="box-text box-text-products text-center grid-style-2">
//                                                     <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-12/">Chuck Taylor Classic</a></p></div><div className="price-wrapper">
//                                                         <span className="price"><span className="woocommerce-Price-amount amount">1,250,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                                                     </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-70-archive-prints-hi-2/?add-to-cart=903" rel="nofollow" data-product_id={903} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                                             </div>{/* box */}
//                                         </div>{/* .col-inner */}
//                                     </div><div className="product-small col has-hover post-911 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-one-star-nu instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '250%' }}>
//                                         <div className="col-inner">
//                                             <div className="badge-container absolute left top z-1">
//                                             </div>
//                                             <div className="product-small box ">
//                                                 <div className="box-image">
//                                                     <div className="image-fade_in_back">
//                                                         <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-love-the-progress-6/">
//                                                             <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-onestar-3-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt />				</a>
//                                                     </div>
//                                                     <div className="image-tools is-small top right show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                                                     </div>
//                                                 </div>{/* box-image */}
//                                                 <div className="box-text box-text-products text-center grid-style-2">
//                                                     <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/one-star-love-the-progress-6/">One Star Love the Progress</a></p></div><div className="price-wrapper">
//                                                         <span className="price"><span className="woocommerce-Price-amount amount">1,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                                                     </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-70-archive-prints-hi-2/?add-to-cart=911" rel="nofollow" data-product_id={911} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                                             </div>{/* box */}
//                                         </div>{/* .col-inner */}
//                                     </div><div className="product-small col has-hover post-910 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-one-star-nu last instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '300%' }}>
//                                         <div className="col-inner">
//                                             <div className="badge-container absolute left top z-1">
//                                             </div>
//                                             <div className="product-small box ">
//                                                 <div className="box-image">
//                                                     <div className="image-fade_in_back">
//                                                         <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-love-the-progress-5/">
//                                                             <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-onestar-4-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt />				</a>
//                                                     </div>
//                                                     <div className="image-tools is-small top right show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                                                     </div>
//                                                 </div>{/* box-image */}
//                                                 <div className="box-text box-text-products text-center grid-style-2">
//                                                     <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/one-star-love-the-progress-5/">One Star Love the Progress</a></p></div><div className="price-wrapper">
//                                                         <span className="price"><span className="woocommerce-Price-amount amount">1,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                                                     </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-70-archive-prints-hi-2/?add-to-cart=910" rel="nofollow" data-product_id={910} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                                             </div>{/* box */}
//                                         </div>{/* .col-inner */}
//                                     </div><div className="product-small col has-hover post-894 product type-product status-publish has-post-thumbnail product_cat-chuck-07s-nu product_cat-nu first instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '350%' }}>
//                                         <div className="col-inner">
//                                             <div className="badge-container absolute left top z-1">
//                                             </div>
//                                             <div className="product-small box ">
//                                                 <div className="box-image">
//                                                     <div className="image-fade_in_back">
//                                                         <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-70-pastel-leather-2/">
//                                                             <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-3-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt />				</a>
//                                                     </div>
//                                                     <div className="image-tools is-small top right show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                                                     </div>
//                                                     <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                                                     </div>
//                                                 </div>{/* box-image */}
//                                                 <div className="box-text box-text-products text-center grid-style-2">
//                                                     <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-70-pastel-leather-2/">Chuck Taylor All Star 70 Pastel Leather</a></p></div><div className="price-wrapper">
//                                                         <span className="price"><span className="woocommerce-Price-amount amount">1,900,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                                                     </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-70-archive-prints-hi-2/?add-to-cart=894" rel="nofollow" data-product_id={894} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                                             </div>{/* box */}
//                                         </div>{/* .col-inner */}
//                                     </div></div></div><button className="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous"><svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" /></svg></button><button className="flickity-button flickity-prev-next-button next" type="button" aria-label="Next"><svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) " /></svg></button></div>
//                         </div>
//                     </div>{/* container */}
//                 </div>{/* product-footer */}
//             </div>

//         </>
//     )
// }

// export default detailProduct
import React from 'react'

type Props = {}

const detailProduct = (props: Props) => {
  return (
    <div>detailProduct</div>
  )
}

export default detailProduct