import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaGithub } from "react-icons/fa";
import './HeaderComponents.css'

const HeaderComponents = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setIsSticky(window.scrollY > 100) };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar_bg ${isSticky ? 'sticky_nav' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <div className="d-flex align-items-center gap-1">
                        <span className='navbar_brand_logo'>Web</span>
                        <span className='navbar_brand_logo_text'>Solution</span>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar_toggler_icon" ><FaBars /></span>
                </button>
                <div className="collapse navbar-collapse py-3 py-sm-0" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink to='#' className="nav-link nav_links">Home</NavLink></li>
                        <li className="nav-item"><NavLink to='#' className="nav-link nav_links">About</NavLink></li>
                        <li className="nav-item"><NavLink to='#' className="nav-link nav_links">Service</NavLink></li>
                        <li className="nav-item"><NavLink to='#' className="nav-link nav_links">Project</NavLink></li>
                        <li className="nav-item"><NavLink to='#' className="nav-link nav_links">Contact</NavLink></li>
                    </ul>
                    <a href="" className='navbar_github_btn'>
                        <span style={{ marginTop: '-2px' }}><FaGithub /></span>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponents