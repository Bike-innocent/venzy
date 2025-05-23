import React from 'react'
import Header from '../../component/Header'
import Hero from './mini-component/Hero'
import Trending from './mini-component/Trending'
import ProductBanner from './mini-component/ProductBanner'
import ShippingInfo from './mini-component/ShippingInfo'
import Footer from '../../component/Footer'

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Trending />
            <ProductBanner />
            <ShippingInfo />
            <Footer />
        </>
    )
}

export default Home
