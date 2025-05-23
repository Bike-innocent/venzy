import React from 'react'
import Flogo from "../assets/images/logo/white-logo.svg"
import Cardlogo from "../assets/images/footer/credit-cards-footer.png"
import { Link } from 'react-router-dom';


function Footer() {

    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };
    return (
        <>






            <footer class="footer">
                {/* <!-- Start Footer Top --> */}
                <div class="footer-top">
                    <div class="container">
                        <div class="inner-content">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 col-12">
                                    <div class="footer-logo">
                                        <Link href="/">
                                            {/* <img src={Flogo} alt="#" /> */}
                                            <h3 className='text-tw-primary'>VENZY</h3>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-8 col-12">
                                    <div class="footer-newsletter">
                                        <h4 class="title">
                                            Subscribe to our Newsletter
                                            <span>Get all the latest information, Sales and Offers.</span>
                                        </h4>
                                        <div class="newsletter-form-head">
                                            <form action="#" method="get" target="_blank" class="newsletter-form">
                                                <input name="EMAIL" placeholder="Email address here..." type="email" />
                                                <div class="button">
                                                    <button class="btn">Subscribe<span class="dir-part"></span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Top --> */}
                {/* <!-- Start Footer Middle --> */}
                <div class="footer-middle">
                    <div class="container">
                        <div class="bottom-inner">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div class="single-footer f-contact">
                                        <h3>Get In Touch With Us</h3>
                                        <p class="phone">Phone: +1 (900) 33 169 7720</p>
                                        <ul>
                                            <li><span>Monday-Friday: </span> 9.00 am - 8.00 pm</li>
                                            <li><span>Saturday: </span> 10.00 am - 6.00 pm</li>
                                        </ul>
                                        <p class="mail">
                                            <a href="mailto:support@shopgrids.com">support@shopgrids.com</a>
                                        </p>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>












                                <div class="col-lg-3 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div class="single-footer f-link">
                                        <h3>Information</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">About Us</a></li>
                                            <li><a href="javascript:void(0)">Contact Us</a></li>
                                            <li><a href="javascript:void(0)">Downloads</a></li>
                                            <li><a href="javascript:void(0)">Sitemap</a></li>
                                            <li><a href="javascript:void(0)">FAQs Page</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                                <div class="col-lg-3 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div class="single-footer f-link">
                                        <h3>Shop Departments</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">Computers & Accessories</a></li>
                                            <li><a href="javascript:void(0)">Smartphones & Tablets</a></li>
                                            <li><a href="javascript:void(0)">TV, Video & Audio</a></li>
                                            <li><a href="javascript:void(0)">Cameras, Photo & Video</a></li>
                                            <li><a href="javascript:void(0)">Headphones</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Middle --> */}
                {/* <!-- Start Footer Bottom --> */}
                <div class="footer-bottom">
                    <div class="container">
                        <div class="inner-content">
                            <div class="row align-items-center">
                                <div class="col-lg-4 col-12">
                                    <div class="payment-gateway">
                                        <span>We Accept:</span>
                                        <img src={Cardlogo} alt="#" />
                                    </div>
                                </div>
                                <div class="col-lg-4 col-12">
                                    <div class="copyright">
                                        <p>© 2025 VENZY COLLECTIONS  All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-12">
                                    <ul class="socila">
                                        <li>
                                            <span>Follow Us On:</span>
                                        </li>
                                        <li><a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a></li>
                                        <li><a href="javascript:void(0)"><i class="lni lni-instagram"></i></a></li>
                                        <li><a href="javascript:void(0)"><i class="lni lni-google"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  {/* <!-- End Footer Bottom --> */}
            </footer>


            <a href="#" class="scroll-top">
                <i class="lni lni-chevron-up"></i>
            </a>
        </>
    )
}

export default Footer
