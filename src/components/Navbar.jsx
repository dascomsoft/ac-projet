
import { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import logo from '../assets/logo.webp'



const Navbar = () => {

    const [openLinks, setOpenLinks] = useState(true)

    const open = "open";
    const close = "close";

    const openLinksUpdate = () => {
        setOpenLinks(!openLinks)
    }


    const handleClick = ()=>{
        setOpenLinks(true)
    }

    return (
        <div>
            <div className="main-navbar bg-black text-white  shadow-xl fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto px-4 py-7">
                    <header>
                        <Link className="logo" to='/'>
                            <img className="w-[70px] h-[70px] rounded-full" src={logo} alt="" />
                        </Link>
                        <div className="navleft" id={openLinks ? open : close}>
                            <h2 className="font-extrabold text-3xl">AC-Services</h2>
                            <Link onClick={handleClick} className="head-link" to="/">Empfang</Link>
                            <Link onClick={handleClick} className="head-link" to="/services">Dienstleistungen</Link>
                            <Link onClick={handleClick} className="head-link" to="/pricing">Kontakt</Link>

                        </div>
                        <nav className="flex gap-5 navright" >
                            <Link className="head-link" to="/">Empfang</Link>
                            <Link className="head-link" to="/about">Dienstleistungen</Link>
                            <Link className="head-link" to="/pricing">Kontakt</Link>

                        </nav>
                        <svg onClick={openLinksUpdate} className="cursor-pointer jam jam-menu" id="openBtn" fill="#fff" width="50px" height="50px" viewBox="-5 -7 24 24"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                            <path
                                d='M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z' />
                        </svg>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Navbar