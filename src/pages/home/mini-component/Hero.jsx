// import React from 'react'

// function Hero() {
//   return (
//     <>
    
//     <section class="hero-area">
//         <div class="container">
//             <div class="row">
//                 <div class="col-lg-8 col-12 custom-padding-right">
//                     <div class="slider-head">
                       
//                         <div class="hero-slider">
                          
//                             <div class="single-slider"
//                                 style="background-image: url(assets/images/hero/slider-bg1.jpg);">
                            
//                                 <div class="content">
//                                     <h2><span>No restocking fee ($35 savings)</span>
//                                         M75 Sport Watch
//                                     </h2>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                                         incididunt ut labore et dolore magna aliqua.</p>
//                                     <h3><span>Now Only</span> $320.99</h3>
//                                     <div class="button">
//                                         <a href="product-grids.html" class="btn">Shop Now</a>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <div class="single-slider"
//                                 style="background-image: url(assets/images/hero/slider-bg2.jpg);">
//                                 <div class="content">
//                                     <h2><span>Big Sale Offer</span>
//                                         Get the Best Deal on CCTV Camera
//                                     </h2>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                                         incididunt ut labore et dolore magna aliqua.</p>
//                                     <h3><span>Combo Only:</span> $590.00</h3>
//                                     <div class="button">
//                                         <a href="product-grids.html" class="btn">Shop Now</a>
//                                     </div>
//                                 </div>
//                             </div>
                          
//                         </div>
                        
//                     </div>
//                 </div>
//                 <div class="col-lg-4 col-12">
//                     <div class="row">
//                         <div class="col-lg-12 col-md-6 col-12 md-custom-padding">
                           
//                             <div class="hero-small-banner"
//                                 style="background-image: url('assets/images/hero/slider-bnr.jpg');">
//                                 <div class="content">
//                                     <h2>
//                                         <span>New line required</span>
//                                         iPhone 12 Pro Max
//                                     </h2>
//                                     <h3>$259.99</h3>
//                                 </div>
//                             </div>
                        
//                         </div>
//                         <div class="col-lg-12 col-md-6 col-12">
                           
//                             <div class="hero-small-banner style2">
//                                 <div class="content">
//                                     <h2>Weekly Sale!</h2>
//                                     <p>Saving up to 50% off all online store items this week.</p>
//                                     <div class="button">
//                                         <a class="btn" href="product-grids.html">Shop Now</a>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     </>
//   )
// }

// export default Hero












import React, { useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { Link } from 'react-router-dom';

function Hero() {
  useEffect(() => {
    tns({
      container: '.hero-slider',
      slideBy: 'page',
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 0,
      items: 1,
      nav: false,
      controls: true,
      controlsText: [
        '<i class="lni lni-chevron-left "></i>',
        '<i class="lni lni-chevron-right"></i>',
      ],
    });
  }, []);

  return (
    <section className="hero-area">
      <div className="container">
        <div className="row">
          {/* Left Side Slider */}
          <div className="col-lg-8 col-12 custom-padding-right">
            <div className="slider-head">
              <div className="hero-slider">
                {/* Slide 1 */}
              <div className="single-slider slider1">
                  <div className="content">
                    <h2>
                      <span>No restocking fee ($35 savings)</span>
                      M75 Sport Watch
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h3>
                      <span>Now Only</span> $320.99
                    </h3>
                    <div className="button">
                      <Link to="/shop" className="btn">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="single-slider slider2">
                  <div className="content">
                    <h2>
                      <span>Big Sale Offer</span>
                      Get the Best Deal on CCTV Camera
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h3>
                      <span>Combo Only:</span> $590.00
                    </h3>
                    <div className="button">
                      <Link to="/shop" className="btn">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Banners */}
          <div className="col-lg-4 col-12">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
              <div className="hero-small-banner banner1">
                  <div className="content">
                    <h2>
                      <span>New line required</span>
                      iPhone 12 Pro Max
                    </h2>
                    <h3>$459.99</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-12">
                <div className="hero-small-banner style2">
                  <div className="content">
                    <h2>Weekly Sale!</h2>
                    <p>Saving up to 50% off all online store items this week.</p>
                    <div className="button">
                      <Link className="btn" to="/shop">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
