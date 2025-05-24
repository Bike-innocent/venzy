//   <li class="nav-item">
//                                             <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
//                                                 data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
//                                                 aria-expanded="false" aria-label="Toggle navigation">Pages</a>
//                                             <ul class="sub-menu collapse" id="submenu-1-2">
//                                                 <li class="nav-item"><a href="about-us.html">About Us</a></li>
//                                                 <li class="nav-item"><a href="faq.html">Faq</a></li>
//                                                 <li class="nav-item"><a href="login.html">Login</a></li>
//                                                 <li class="nav-item"><a href="register.html">Register</a></li>
//                                             </ul>
//                                         </li>
//                                         <li class="nav-item">
//                                             <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
//                                                 data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
//                                                 aria-expanded="false" aria-label="Toggle navigation">Shop</a>
//                                             <ul class="sub-menu collapse" id="submenu-1-3">
//                                                 <li class="nav-item"><a href="product-grids.html">Shop Grid</a></li>
//                                                 <li class="nav-item"><a href="product-list.html">Shop List</a></li>
//                                                 <li class="nav-item"><a href="product-details.html">shop Single</a></li>
//                                                 <li class="nav-item"><a href="cart.html">Cart</a></li>
//                                                 <li class="nav-item"><a href="checkout.html">Checkout</a></li>
//                                             </ul>
//                                         </li>
//                                         <li class="nav-item">
//                                             <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
//                                                 data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
//                                                 aria-expanded="false" aria-label="Toggle navigation">Blog</a>
//                                             <ul class="sub-menu collapse" id="submenu-1-4">
//                                                 <li class="nav-item"><a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
//                                                 </li>
//                                                 <li class="nav-item"><a href="blog-single.html">Blog Single</a></li>
//                                                 <li class="nav-item"><a href="blog-single-sidebar.html">Blog Single
//                                                     Sibebar</a></li>
//                                             </ul>
//                                         </li>
















// import React, { useState } from 'react'
// import SocialNav from './SocialNav';
// import { Link } from 'react-router-dom';

// function BottomBar() {


//     const [menuOpen, setMenuOpen] = useState(false);

//     const handleToggle = () => {
//         setMenuOpen(prev => !prev);
//     };
//     return (
//         <>
           
//                 <div class="container">
//                     <div class="row align-items-center">
//                         <div class="col-lg-8 col-md-6 col-12">
//                             <div class="nav-inner">
//                                 {/* <!-- Start Mega Category Menu--> */}
//                                 <div class="mega-category-menu">
//                                     <span class="cat-button"><i class="lni lni-menu"></i>All Categories</span>
//                                     <ul class="sub-category">
//                                         <li><a href="product-grids.html">Electronics </a>

//                                         </li>
//                                         <li><a href="product-grids.html">accessories</a></li>
//                                         <li><a href="product-grids.html">Televisions</a></li>
//                                         <li><a href="product-grids.html">best selling</a></li>
//                                         <li><a href="product-grids.html">top 100 offer</a></li>
//                                         <li><a href="product-grids.html">sunglass</a></li>
//                                         <li><a href="product-grids.html">watch</a></li>
//                                         <li><a href="product-grids.html">man’s product</a></li>
//                                         <li><a href="product-grids.html">Home Audio & Theater</a></li>
//                                         <li><a href="product-grids.html">Computers & Tablets </a></li>
//                                         <li><a href="product-grids.html">Video Games </a></li>
//                                         <li><a href="product-grids.html">Home Appliances </a></li>
//                                     </ul>
//                                 </div>
//                                 {/* <!-- End Mega Category Menu--> */}
//                                 {/* <!-- Start Navbar--> */}
//                                 <nav class="navbar navbar-expand-lg">
//                                     <button className={`navbar-toggler mobile-menu-btn ${menuOpen ? 'active' : ''}`}

//                                         type="button"
//                                         onClick={handleToggle}
//                                         aria-expanded={menuOpen}
//                                         aria-label="Toggle navigation"
//                                     >
//                                         <span class="toggler-icon"></span>
//                                         <span class="toggler-icon"></span>
//                                         <span class="toggler-icon"></span>
//                                     </button>



//                                     <div className={` collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
//                                         <ul id="nav" class="navbar-nav ms-auto">
//                                             <li class="nav-item">
//                                                 <Link to="/" class="active" aria-label="Toggle navigation">Home</Link>
//                                             </li>
//                                             <li class="nav-item">
//                                                 <Link to="/shop" aria-label="Toggle navigation">Shop</Link>
//                                             </li>
//                                             <li class="nav-item">
//                                                 <Link to="/about" aria-label="Toggle navigation">About</Link>
//                                             </li>

//                                             <li class="nav-item">
//                                                 <Link to="/wishlist" aria-label="Toggle navigation">Wishlist</Link>
//                                             </li>


//                                             <li class="nav-item">
//                                                 <Link to="/contact" aria-label="Toggle navigation">Contact Us</Link>
//                                             </li>
//                                         </ul>
//                                     </div>


//                                 </nav>
//                                 {/* <!-- End Navbar--> */}
//                             </div>
//                         </div>

//                         <SocialNav />
//                     </div>
//                 </div>
          
//         </>
//     )
// }

// export default BottomBar




// import React, { useState } from 'react';
// import SocialNav from './SocialNav';
// import { Link } from 'react-router-dom';

// function BottomBar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const handleToggle = () => {
//         setMenuOpen(prev => !prev);
//     };

//     return (
//         <div className="container">
//             <div className="row align-items-center">
//                 <div className="col-lg-8 col-md-6 col-12">
//                     <div className="nav-inner">
//                         {/* Mega Category Menu */}
//                         <div className="mega-category-menu">
//                             <span className="cat-button"><i className="lni lni-menu"></i>All Categories</span>
//                             <ul className="sub-category">
//                                 <li><a href="product-grids.html">Electronics </a></li>
//                                 <li><a href="product-grids.html">accessories</a></li>
//                                 <li><a href="product-grids.html">Televisions</a></li>
//                                 <li><a href="product-grids.html">best selling</a></li>
//                                 <li><a href="product-grids.html">top 100 offer</a></li>
//                                 <li><a href="product-grids.html">sunglass</a></li>
//                                 <li><a href="product-grids.html">watch</a></li>
//                                 <li><a href="product-grids.html">man’s product</a></li>
//                                 <li><a href="product-grids.html">Home Audio & Theater</a></li>
//                                 <li><a href="product-grids.html">Computers & Tablets </a></li>
//                                 <li><a href="product-grids.html">Video Games </a></li>
//                                 <li><a href="product-grids.html">Home Appliances </a></li>
//                             </ul>
//                         </div>

//                         {/* Navbar */}
//                         <nav className="navbar navbar-expand-lg">
//                             <button
//                                 className={`navbar-toggler mobile-menu-btn ${menuOpen ? 'active' : ''}`}
//                                 type="button"
//                                 onClick={handleToggle}
//                                 aria-expanded={menuOpen}
//                                 aria-label="Toggle navigation"
//                             >
//                                 <span className="toggler-icon"></span>
//                                 <span className="toggler-icon"></span>
//                                 <span className="toggler-icon"></span>
//                             </button>

//                             <div
//                                 className={`navbar-collapse ${menuOpen ? 'block' : 'hidden'} lg:flex`}
//                                 id="navbarSupportedContent"
//                             >
//                                 <ul id="nav" className="navbar-nav ms-auto">
//                                     <li className="nav-item">
//                                         <Link to="/" className="active" aria-label="Toggle navigation">Home</Link>
//                                     </li>
//                                     <li className="nav-item">
//                                         <Link to="/shop" aria-label="Toggle navigation">Shop</Link>
//                                     </li>
//                                     {/* <li className="nav-item">
//                                         <Link to="/about" aria-label="Toggle navigation">About</Link>
//                                     </li> */}
//                                     <li className="nav-item">
//                                         <Link to="/faq" aria-label="Toggle navigation">FAQ</Link>
//                                     </li>
//                                     <li className="nav-item">
//                                         <Link to="/contact" aria-label="Toggle navigation">Contact Us</Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>

//                 <SocialNav />
//             </div>
//         </div>
//     );
// }

// export default BottomBar;



















import React, { useState } from 'react';
import SocialNav from './SocialNav';
import { NavLink } from 'react-router-dom';

function BottomBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-6 col-12">
                    <div className="nav-inner">
                        {/* Mega Category Menu */}
                        <div className="mega-category-menu">
                            <span className="cat-button">
                                <i className="lni lni-menu"></i>All Categories
                            </span>
                            <ul className="sub-category">
                                <li><a href="product-grids.html">Electronics</a></li>
                                <li><a href="product-grids.html">Accessories</a></li>
                                <li><a href="product-grids.html">Televisions</a></li>
                                <li><a href="product-grids.html">Best Selling</a></li>
                                <li><a href="product-grids.html">Top 100 Offer</a></li>
                                <li><a href="product-grids.html">Sunglass</a></li>
                                <li><a href="product-grids.html">Watch</a></li>
                                <li><a href="product-grids.html">Man’s Product</a></li>
                                <li><a href="product-grids.html">Home Audio & Theater</a></li>
                                <li><a href="product-grids.html">Computers & Tablets</a></li>
                                <li><a href="product-grids.html">Video Games</a></li>
                                <li><a href="product-grids.html">Home Appliances</a></li>
                            </ul>
                        </div>

                        {/* Navbar */}
                        <nav className="navbar navbar-expand-lg">
                            <button
                                className={`navbar-toggler mobile-menu-btn ${menuOpen ? 'active' : ''}`}
                                type="button"
                                onClick={handleToggle}
                                aria-expanded={menuOpen}
                                aria-label="Toggle navigation"
                            >
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div
                                className={`navbar-collapse ${menuOpen ? 'block' : 'hidden'} lg:flex`}
                                id="navbarSupportedContent"
                            >
                                <ul id="nav" className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <NavLink
                                            to="/"
                                              onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) =>
                                                isActive ? 'active text-tw-primary' : 'text-gray-700'
                                            }
                                            aria-label="Toggle navigation"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/shop"
                                              onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) =>
                                                isActive ? 'active text-tw-primary' : 'text-gray-700'
                                            }
                                            aria-label="Toggle navigation"
                                        >
                                            Shop
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/faq"
                                              onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) =>
                                                isActive ? 'active text-tw-primary' : 'text-gray-700'
                                            }
                                            aria-label="Toggle navigation"
                                        >
                                            FAQ
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/contact"
                                              onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) =>
                                                isActive ? 'active text-tw-primary' : 'text-gray-700'
                                            }
                                            aria-label="Toggle navigation"
                                        >
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Social Icons */}
                <SocialNav />
            </div>
        </div>
    );
}

export default BottomBar;
