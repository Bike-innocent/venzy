import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <>
        <div class="topbar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="top-left">
                                    <ul class="menu-top-link">
                                        <li>
                                            <div class="select-position">
                                                <select id="select4">
                                                    <option value="0" selected>$ USD</option>
                                                    <option value="1">€ EURO</option>
                                                    <option value="2">$ CAD</option>
                                                    <option value="3">₹ INR</option>
                                                    <option value="4">¥ CNY</option>
                                                    <option value="5">৳ BDT</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="select-position">
                                                <select id="select5">
                                                    <option value="0" selected>English</option>
                                                    <option value="1">Español</option>
                                                    <option value="2">Filipino</option>
                                                    <option value="3">Français</option>
                                                    <option value="4">العربية</option>
                                                    <option value="5">हिन्दी</option>
                                                    <option value="6">বাংলা</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="top-middle">
                                    <ul class="useful-links">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="top-end">
                                    <div class="user">
                                        <i class="lni lni-user"></i>
                                        Hello
                                    </div>
                                    <ul class="user-login">
                                        <li>
                                            <Link to="/login">Sign In</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Register</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







    </>
  )
}

export default TopBar
