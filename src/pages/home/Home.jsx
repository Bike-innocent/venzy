import React from 'react'
import Header from '../../component/Header/Header'
import Hero from './mini-component/Hero'
import Trending from './mini-component/Trending'
import ProductBanner from './mini-component/ProductBanner'
import ShippingInfo from './mini-component/ShippingInfo'
import Footer from '../../component/Footer'

function Home() {
    return (
        <>
           
            <Hero />
            <Trending />
            <ProductBanner />
            <ShippingInfo />
           
        </>
    )
}

export default Home
