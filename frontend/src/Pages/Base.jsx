import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'

function Base({ children }) {

    return (
        <>
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading" />
                    <div id="loading-icon">
                        <img src="/images/loader.svg" alt="" />
                    </div>
                </div>
            </div>
            <Header />
            {children}
            <Footer />

        </>
    )
}

export default Base
