// src/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer';

function MainLayout() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;
