import React, { useState } from 'react'

import TopBar from './TopBar';
import MiddleBar from './MiddleBar';
import BottomBar from './BottomBar';

function Header() {

    return (
        <>
     
            <header class="header navbar-area">
                <TopBar />
                <MiddleBar />
                <BottomBar />
            </header>
          
        </>
    )
}

export default Header
