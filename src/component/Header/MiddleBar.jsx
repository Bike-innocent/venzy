import React from 'react'
import Cart1 from "../../assets/images/header/cart-items/item1.jpg"
import Cart2 from "../../assets/images/header/cart-items/item2.jpg"
import { Link } from 'react-router-dom'

function MiddleBar() {
    return (
        <>

            <div class="header-middle">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-3 col-7">
                            {/* <!-- Start Header Logo--> */}
                            <Link class="navbar-brand" to="/">
                                {/* <img src="assets/images/logo/logo.svg" alt="Logo"/> */}
                                <h3>VENZY</h3>
                            </Link>
                            {/* <!-- End Header Logo--> */}
                        </div>
                        <div class="col-lg-5 col-md-7 d-xs-none">
                            {/* <!-- Start Main Menu Search--> */}
                            <div class="main-menu-search">
                                {/* <!-- navbar search start--> */}
                                <div class="navbar-search search-style-5">
                                    <div class="search-select">
                                        <div class="select-position">
                                            <select id="select1">
                                                <option selected>All</option>
                                                <option value="1">option 01</option>
                                                <option value="2">option 02</option>
                                                <option value="3">option 03</option>
                                                <option value="4">option 04</option>
                                                <option value="5">option 05</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="search-input">
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <div class="search-btn">
                                        <button><i class="lni lni-search-alt"></i></button>
                                    </div>
                                </div>
                                {/* <!-- navbar search Ends--> */}
                            </div>
                            {/* <!-- End Main Menu Search--> */}
                        </div>
                        <div class="col-lg-4 col-md-2 col-5">
                            <div class="middle-right-area">
                                <div class="nav-hotline">
                                    <i class="lni lni-phone"></i>
                                    <h3>Hotline:
                                        <span>(+100) 123 456 7890</span>
                                    </h3>
                                </div>
                                <div class="navbar-cart">
                                    {/* <div class="wishlist">
                                        <a href="javascript:void(0)">
                                            <i class="lni lni-heart"></i>
                                            <span class="total-items">0</span>
                                        </a>
                                    </div> */}
                                    <div class="cart-items">
                                        <a href="javascript:void(0)" class="main-btn">
                                            <i class="lni lni-cart"></i>
                                            <span class="total-items">2</span>
                                        </a>
                                        {/* <!-- Shopping Item--> */}
                                        <div class="shopping-item">
                                            <div class="dropdown-cart-header">
                                                <span>2 Items</span>
                                                <Link to="/cart">View Cart</Link>
                                            </div>
                                            <ul class="shopping-list">
                                                <li>
                                                    <a href="javascript:void(0)" class="remove" title="Remove this item"><i
                                                        class="lni lni-close"></i></a>
                                                    <div class="cart-img-head">
                                                        <Link class="cart-img" to="/product-detail"><img
                                                            src={Cart1} alt="#" /></Link>
                                                    </div>

                                                    <div class="content">
                                                        <h4><Link to="/product-detail">
                                                            Apple Watch Series 6</Link></h4>
                                                        <p class="quantity">1x - <span class="amount">$99.00</span></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" class="remove" title="Remove this item"><i
                                                        class="lni lni-close"></i></a>
                                                    <div class="cart-img-head">
                                                        <Link class="cart-img" to="/product-detail"><img
                                                            src={Cart2} alt="#" /></Link>
                                                    </div>
                                                    <div class="content">
                                                        <h4><Link to="/product-detail">Wi-Fi Smart Camera</Link></h4>
                                                        <p class="quantity">1x - <span class="amount">$35.00</span></p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="bottom">
                                                <div class="total">
                                                    <span>Total</span>
                                                    <span class="total-amount">$134.00</span>
                                                </div>
                                                <div class="button">
                                                    <Link to="/check-out" class="btn animate">Checkout</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MiddleBar
