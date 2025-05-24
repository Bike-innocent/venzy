import React from 'react'
import Cart1 from "../../assets/images/cart/01.jpg"
import Cart2 from "../../assets/images/cart/02.jpg"
import Cart3 from "../../assets/images/cart/03.jpg"
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      

    
    {/* <!-- Shopping Cart --> */}
    <div class="shopping-cart section">
        <div class="container">
            <div class="cart-list-head">
                {/* <!-- Cart List Title --> */}
                <div class="cart-list-title">
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-12">

                        </div>
                        <div class="col-lg-4 col-md-3 col-12">
                            <p>Product Name</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Quantity</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Subtotal</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Discount</p>
                        </div>
                        <div class="col-lg-1 col-md-2 col-12">
                            <p>Remove</p>
                        </div>
                    </div>
                </div>
                {/* <!-- End Cart List Title --> */}
                {/* <!-- Cart Single List list --> */}
                <div class="cart-single-list">
                    <div class="row align-items-center">
                        <div class="col-lg-1 col-md-1 col-12">
                            <Link to="/product-detail"><img src={Cart1} alt="#"/></Link>
                        </div>
                        <div class="col-lg-4 col-md-3 col-12">
                            <h5 class="product-name"><Link to="/product-detail">
                                    Canon EOS M50 Mirrorless Camera</Link></h5>
                            <p class="product-des">
                                <span><em>Type:</em> Mirrorless</span>
                                <span><em>Color:</em> Black</span>
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <div class="count-input">
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>$910.00</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>$29.00</p>
                        </div>
                        <div class="col-lg-1 col-md-2 col-12">
                            <a class="remove-item" href="javascript:void(0)"><i class="lni lni-close"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single List list --> */}
                {/* <!-- Cart Single List list --> */}
                <div class="cart-single-list">
                    <div class="row align-items-center">
                        <div class="col-lg-1 col-md-1 col-12">
                            <Link to="/product-detail"><img src={Cart2}alt="#"/></Link>
                        </div>
                        <div class="col-lg-4 col-md-3 col-12">
                            <h5 class="product-name"><Link to="/product-detail">
                                    Apple iPhone X 256 GB Space Gray</Link></h5>
                            <p class="product-des">
                                <span><em>Memory:</em> 256 GB</span>
                                <span><em>Color:</em> Space Gray</span>
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <div class="count-input">
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>$1100.00</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>—</p>
                        </div>
                        <div class="col-lg-1 col-md-2 col-12">
                            <a class="remove-item" href="javascript:void(0)"><i class="lni lni-close"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single List list --> */}
                {/* <!-- Cart Single List list --> */}
                <div class="cart-single-list">
                    <div class="row align-items-center">
                        <div class="col-lg-1 col-md-1 col-12">
                            <Link to="/product-detail"><img src={Cart3} alt="#"/></Link>
                        </div>
                        <div class="col-lg-4 col-md-3 col-12">
                            <h5 class="product-name"><Link to="/product-detail">HP LaserJet Pro Laser Printer</Link></h5>
                            <p class="product-des">
                                <span><em>Type:</em> Laser</span>
                                <span><em>Color:</em> White</span>
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <div class="count-input">
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>$550.00</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>—</p>
                        </div>
                        <div class="col-lg-1 col-md-2 col-12">
                            <a class="remove-item" href="javascript:void(0)"><i class="lni lni-close"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single List list --> */}
            </div>
            <div class="row">
                <div class="col-12">
                    {/* <!-- Total Amount --> */}
                    <div class="total-amount">
                        <div class="row">
                            <div class="col-lg-8 col-md-6 col-12">
                                <div class="left">
                                    <div class="coupon">
                                        <form action="#" target="_blank">
                                            <input name="Coupon" placeholder="Enter Your Coupon"/>
                                            <div class="button">
                                                <button class="btn">Apply Coupon</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="right">
                                    <ul>
                                        <li>Cart Subtotal<span>$2560.00</span></li>
                                        <li>Shipping<span>Free</span></li>
                                        <li>You Save<span>$29.00</span></li>
                                        <li class="last">You Pay<span>$2531.00</span></li>
                                    </ul>
                                    <div class="button">
                                        <Link to="/check-out" class="btn">Checkout</Link>
                                        <Link to="/shop" class="btn btn-alt">Continue shopping</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/ End Total Amount --> */}
                </div>
            </div>
        </div>
    </div>











    </>
  )
}

export default Cart
