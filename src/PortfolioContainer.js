import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Github from './components/Github'
import Resume from './components/Resume'


export default function PortfolioContainer() {
    const Pages = {
        About,
        Contact,
        Portfolio,
        Github,
        Resume
    }
    const [currentPage, setPage] = useState("About")

    return (
        <div>
            <Navbar handlePageChange={setPage} />
            {Pages[currentPage]()}

        </div>

    )
}