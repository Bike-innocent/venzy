import React from 'react'

import Product1 from "../../assets/images/products/product-1.jpg"
import Product2 from "../../assets/images/products/product-2.jpg"
import Product3 from "../../assets/images/products/product-3.jpg"
import Product4 from "../../assets/images/products/product-4.jpg"
import Product5 from "../../assets/images/products/product-5.jpg"
import Product6 from "../../assets/images/products/product-6.jpg"
import Product7 from "../../assets/images/products/product-7.jpg"
import Product8 from "../../assets/images/products/product-8.jpg"


function Shop() {
  return (
    <>
      



    
     {/* <!--/ Start Product Grids --> */}
    <section class="product-grids section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-12">
                     {/* <!--/ Start Product Sidebar --> */}
                    <div class="product-sidebar">
                         {/* <!--/ Start Single Widget --> */}
                        <div class="single-widget search">
                            <h3>Search Product</h3>
                            <form action="#">
                                <input type="text" placeholder="Search Here..."/>
                                <button type="submit"><i class="lni lni-search-alt"></i></button>
                            </form>
                        </div>
                         {/* <!--/ End Single Widget --> */}
                         {/* <!--/ Start Single Widget --> */}
                        <div class="single-widget">
                            <h3>All Categories</h3>
                            <ul class="list">
                                <li>
                                    <a href="product-grids.html">Computers & Accessories </a><span>(1138)</span>
                                </li>
                                <li>
                                    <a href="product-grids.html">Smartphones & Tablets</a><span>(2356)</span>
                                </li>
                                <li>
                                    <a href="product-grids.html">TV, Video & Audio</a><span>(420)</span>
                                </li>
                                <li>
                                    <a href="product-grids.html">Cameras, Photo & Video</a><span>(874)</span>
                                </li>
                                <li>
                                    <a href="product-grids.html">Headphones</a><span>(1239)</span>
                                </li>
                                <li>
                                    <a href="product-grids.html">Wearable Electronics</a><span>(340)</span>
                                </li>
                                <li>
                                    <a href="product-grids.html">Printers & Ink</a><span>(512)</span>
                                </li>
                            </ul>
                        </div>
                         {/* <!--/ End Single Widget --> */}
                         {/* <!--/ Start Single Widget --> */}
                        <div class="single-widget range">
                            <h3>Price Range</h3>
                            <input type="range" class="form-range" name="range" step="1" min="100" max="10000"
                                value="10" onchange="rangePrimary.value=value"/>
                            <div class="range-inner">
                                <label>$</label>
                                <input type="text" id="rangePrimary" placeholder="100" />
                            </div>
                        </div>
                      
                         
                    </div>
                     {/* <!--/ End Product Sidebar --> */}
                </div>
















                <div class="col-lg-9 col-12">
                    <div class="product-grids-head">
                        <div class="product-grid-topbar">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-8 col-12">
                                    <div class="product-sorting">
                                        <label for="sorting">Sort by:</label>
                                        <select class="form-control" id="sorting">
                                            <option>Popularity</option>
                                            <option>Low - High Price</option>
                                            <option>High - Low Price</option>
                                            <option>Average Rating</option>
                                            <option>A - Z Order</option>
                                            <option>Z - A Order</option>
                                        </select>
                                        <h3 class="total-show-product">Showing: <span>1 - 12 items</span></h3>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-4 col-12">
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button class="nav-link active" id="nav-grid-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-grid" type="button" role="tab"
                                                aria-controls="nav-grid" aria-selected="true"><i
                                                    class="lni lni-grid-alt"></i></button>
                                            <button class="nav-link" id="nav-list-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-list" type="button" role="tab"
                                                aria-controls="nav-list" aria-selected="false"><i
                                                    class="lni lni-list"></i></button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-grid" role="tabpanel"
                                aria-labelledby="nav-grid-tab">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product1} alt="#"/>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Watches</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">Xiaomi Mi Band 5</a>
                                                </h4>
                                                
                                                <div class="price">
                                                    <span>$199.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product2} alt="#"/>
                                                <span class="sale-tag">-25%</span>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Speaker</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">Bluetooth Speaker</a>
                                                </h4>
                                             
                                                <div class="price">
                                                    <span>$275.00</span>
                                                    <span class="discount-price">$300.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product3} alt="#"/>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Camera</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">WiFi Security Camera</a>
                                                </h4>
                                             
                                                <div class="price">
                                                    <span>$399.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product4}alt="#"/>
                                                <span class="new-tag">New</span>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Phones</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">iphone 6x plus</a>
                                                </h4>
                                             
                                                <div class="price">
                                                    <span>$400.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product5} alt="#"/>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Headphones</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">Wireless Headphones</a>
                                                </h4>
                                             
                                                <div class="price">
                                                    <span>$350.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product6} alt="#"/>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Speaker</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">Mini Bluetooth Speaker</a>
                                                </h4>
                                                
                                                <div class="price">
                                                    <span>$70.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product6} alt="#"/>
                                                <span class="sale-tag">-50%</span>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Headphones</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">Wireless Headphones</a>
                                                </h4>
                                                
                                                <div class="price">
                                                    <span>$100.00</span>
                                                    <span class="discount-price">$200.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product8} alt="#"/>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Laptop</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">Apple MacBook Air</a>
                                                </h4>
                                             
                                                <div class="price">
                                                    <span>$899.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="product-image">
                                                <img src={Product7} alt="#"/>
                                                <span class="sale-tag">-25%</span>
                                                <div class="button">
                                                    <a href="product-details.html" class="btn"><i
                                                            class="lni lni-cart"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <span class="category">Speaker</span>
                                                <h4 class="title">
                                                    <a href="product-grids.html">Bluetooth Speaker</a>
                                                </h4>
                                             
                                                <div class="price">
                                                    <span>$275.00</span>
                                                    <span class="discount-price">$300.00</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                         {/* <!--/ Pagination --> */}
                                        <div class="pagination left">
                                            <ul class="pagination-list">
                                                <li><a href="javascript:void(0)">1</a></li>
                                                <li class="active"><a href="javascript:void(0)">2</a></li>
                                                <li><a href="javascript:void(0)">3</a></li>
                                                <li><a href="javascript:void(0)">4</a></li>
                                                <li><a href="javascript:void(0)"><i
                                                            class="lni lni-chevron-right"></i></a></li>
                                            </ul>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="row align-items-center">
                                                <div class="col-lg-4 col-md-4 col-12">
                                                    <div class="product-image">
                                                        <img src={Product8} alt="#"/>
                                                        <div class="button">
                                                            <a href="product-details.html" class="btn"><i
                                                                    class="lni lni-cart"></i> Add to
                                                                Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-12">
                                                    <div class="product-info">
                                                        <span class="category">Watches</span>
                                                        <h4 class="title">
                                                            <a href="product-grids.html">Xiaomi Mi Band 5</a>
                                                        </h4>
                                                        <ul class="review">
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star"></i></li>
                                                            <li><span>4.0 Review(s)</span></li>
                                                        </ul>
                                                        <div class="price">
                                                            <span>$199.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="row align-items-center">
                                                <div class="col-lg-4 col-md-4 col-12">
                                                    <div class="product-image">
                                                        <img src={Product2} alt="#"/>
                                                        <span class="sale-tag">-25%</span>
                                                        <div class="button">
                                                            <a href="product-details.html" class="btn"><i
                                                                    class="lni lni-cart"></i> Add to
                                                                Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-12">
                                                    <div class="product-info">
                                                        <span class="category">Speaker</span>
                                                        <h4 class="title">
                                                            <a href="product-grids.html">Big Power Sound Speaker</a>
                                                        </h4>
                                                        <ul class="review">
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div class="price">
                                                            <span>$275.00</span>
                                                            <span class="discount-price">$300.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="row align-items-center">
                                                <div class="col-lg-4 col-md-4 col-12">
                                                    <div class="product-image">
                                                        <img src={Product3} alt="#"/>
                                                        <div class="button">
                                                            <a href="product-details.html" class="btn"><i
                                                                    class="lni lni-cart"></i> Add to
                                                                Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-12">
                                                    <div class="product-info">
                                                        <span class="category">Camera</span>
                                                        <h4 class="title">
                                                            <a href="product-grids.html">WiFi Security Camera</a>
                                                        </h4>
                                                        <ul class="review">
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div class="price">
                                                            <span>$399.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="row align-items-center">
                                                <div class="col-lg-4 col-md-4 col-12">
                                                    <div class="product-image">
                                                        <img src={Product1} alt="#"/>
                                                        <span class="new-tag">New</span>
                                                        <div class="button">
                                                            <a href="product-details.html" class="btn"><i
                                                                    class="lni lni-cart"></i> Add to
                                                                Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-12">
                                                    <div class="product-info">
                                                        <span class="category">Phones</span>
                                                        <h4 class="title">
                                                            <a href="product-grids.html">iphone 6x plus</a>
                                                        </h4>
                                                        <ul class="review">
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div class="price">
                                                            <span>$400.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                         {/* <!--/ Start Single Product --> */}
                                        <div class="single-product">
                                            <div class="row align-items-center">
                                                <div class="col-lg-4 col-md-4 col-12">
                                                    <div class="product-image">
                                                        <img src={Product5} alt="#"/>
                                                        <span class="sale-tag">-50%</span>
                                                        <div class="button">
                                                            <a href="product-details.html" class="btn"><i
                                                                    class="lni lni-cart"></i> Add to
                                                                Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-12">
                                                    <div class="product-info">
                                                        <span class="category">Headphones</span>
                                                        <h4 class="title">
                                                            <a href="product-grids.html">PX7 Wireless Headphones</a>
                                                        </h4>
                                                        <ul class="review">
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star"></i></li>
                                                            <li><span>4.0 Review(s)</span></li>
                                                        </ul>
                                                        <div class="price">
                                                            <span>$100.00</span>
                                                            <span class="discount-price">$200.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!--/ End Single Product --> */}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                         {/* <!--/ Pagination --> */}
                                        <div class="pagination left">
                                            <ul class="pagination-list">
                                                <li><a href="javascript:void(0)">1</a></li>
                                                <li class="active"><a href="javascript:void(0)">2</a></li>
                                                <li><a href="javascript:void(0)">3</a></li>
                                                <li><a href="javascript:void(0)">4</a></li>
                                                <li><a href="javascript:void(0)"><i
                                                            class="lni lni-chevron-right"></i></a></li>
                                            </ul>
                                        </div>
                                        {/* <!--/ End Pagination --> */} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>







    </>
  )
}

export default Shop
