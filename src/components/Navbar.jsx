import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="text-white px-6 py-4" style={{ background: "linear-gradient(to right, #273a72, #1c1e20)", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>

            <div className="flex justify-between items-center w-full">


                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

                    {/* LOGO */}

                    {/* <Link
                        to="/"
                        className="group flex items-center flex-shrink-0"
                    >

                        <img
                            src="/logo.jpeg"
                            alt="Nexa Logo"
                            className="
        w-10 h-10
        sm:w-12 sm:h-12
        md:w-14 md:h-14
        rounded-full
        object-cover
        border border-yellow-400
        shadow-lg
        cursor-pointer
        transition-all duration-300
        group-hover:scale-110
        group-hover:shadow-yellow-500/50
      "
                        />

                    </Link> */}

                    {/* BRAND NAME */}

                    <Link
                        to="/"
                        className="
      leading-tight
      transition-all duration-300
      hover:scale-105
    "
                    >

                        <h1
                            className="
        text-lg
        sm:text-xl
        md:text-2xl
        lg:text-3xl
        font-extrabold
        tracking-wide
      "
                        >

                            <span className="text-yellow-400 drop-shadow-lg">
                                Nexa
                            </span>

                            <span className="text-white ml-2">
                                Wealth
                            </span>

                            <br className="sm:hidden" />

                            <span className="text-white sm:ml-2">
                                Partners
                            </span>

                        </h1>

                    </Link>

                </div>

                {/* DESKTOP MENU */}

                <div className="hidden md:flex gap-8 text-lg">

                    <Link to="/">Home</Link>

                    <Link to="/about">About</Link>

                    <Link to="/services">Services</Link>

                    <Link to="/contact">Contact</Link>

                </div>

                {/* MOBILE MENU BUTTON */}

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen ? <FaTimes /> : <FaBars />}

                </button>

            </div>

            {/* MOBILE MENU */}

            {menuOpen && (

                <div className="flex flex-col gap-4 mt-4 md:hidden text-center">

                    <Link to="/">Home</Link>

                    <Link to="/about">About</Link>

                    <Link to="/services">Services</Link>

                    <Link to="/contact">Contact</Link>

                </div>

            )}

        </nav>

    );
}

export default Navbar;