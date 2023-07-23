import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiMenu } from "react-icons/bi"
import { SiGitlab } from "react-icons/si"
import { ImLinkedin } from "react-icons/im"
import { IoLogoWhatsapp } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import userImg from "../Images/profileimg.png"
const navLinks = [
    {
        path: "/",
        display: "Home"
    },
    {
        path: "/awesome",
        display: "Designs"
    },
    {
        path: "/Contact",
        display: "Contac Us"
    }
]

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        handleStickyHeader()
        return () => window.removeEventListener('scroll', handleStickyHeader)

    })
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

    return (
        <header className='d-flex align-items-center fixed-top p-3 header' ref={headerRef}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className='d-flex justify-content-between gap-3'>
                        <a href='https://gitlab.com/vickypersonalguide' className='smallText' target='_blank'><SiGitlab className='gitLabIcon' /></a>
                        <a href='https://www.linkedin.com/in/vignesh-babu-s-s-81581a242/'
                            target='_blank' className='smallText'><ImLinkedin className='linkedInIcon' /></a>
                        <a href='https://wa.me/9994539140' className='smallText'><IoLogoWhatsapp className='whatsAppIcon' target='_blank' /></a>
                    </div>


                    <div className="navigation" ref={menuRef}>
                        <div className='d-flex align-items-center d-block d-md-none justify-content-between mobileShadow'>
                            <Link to='/' className='userSec shadowMy' >
                                <img src={userImg} alt="" className='userImage' />
                                <p className='mb-0 pe-3'>Vignesh Babu SS</p>
                            </Link>
                            <span className='d-md-none d-block toggleIcon' onClick={toggleMenu}>
                                <IoClose className='cursor-pointer' />
                            </span>
                        </div>
                        <ul className="menu d-flex align-items-md-center align-items-start flex-column flex-md-row  w-100 gap-md-5 gap-3 mb-0 mt-4 mt-md-0 list-unstyled">
                            {
                                navLinks.map((link, index) =>
                                    <li key={index} onClick={toggleMenu}>
                                        <NavLink to={link.path} className={navClass => navClass.isActive ? "navActive text-decoration-none" : "smallText text-decoration-none"}>{link.display}</NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className='flex align-items-center d-none d-md-block'>
                        <Link to='/' className='userSec shadowMy' >
                            <img src={userImg} alt="" className='userImage' />
                            <p className='mb-0 pe-3'>Vignesh Babu SS</p>
                        </Link>
                    </div>
                    <span className='d-md-none d-block toggleIcon' onClick={toggleMenu}>
                        <BiMenu className='cursor-pointer' />
                    </span>
                </div>
            </div>
        </header >

    )
}
export default Header