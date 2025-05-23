import React from 'react'

function ProductBanner() {
    return (
        <>



            <section class="banner section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="single-banner banner1" >
                                <div class="content">
                                    <h2>Smart Watch 2.0</h2>
                                    <p>Space Gray Aluminum Case with <br />Black/Volt Real Sport Band </p>
                                    <div class="button">
                                        <a href="product-grids.html" class="btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="single-banner banner2 custom-responsive-margin"
                            >
                                <div class="content">
                                    <h2>Smart Headphone</h2>
                                    <p>Lorem ipsum dolor sit amet, <br />eiusmod tempor
                                        incididunt ut labore.</p>
                                    <div class="button">
                                        <a href="product-grids.html" class="btn">Shop Now</a>
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

export default ProductBanner
