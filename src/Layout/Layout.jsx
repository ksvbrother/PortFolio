import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../Routes/Routes'

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />
        </div>
    )
}

export default Layout