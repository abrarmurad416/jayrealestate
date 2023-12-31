import React, { useState, useEffect } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Listingsheader = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`sticky top-0 z-50 ${hasScrolled ? "shadow-md" : ""}`}>
            <nav className="flex items-center justify-between flex-wrap bg-white p-4">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img
                        className="fill-current h-8 w-8 mr-2"
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        src="/images/logo.png"
                    />{" "}
                    <a
                        href="#MainContent"
                        onClick={scrollToTop}
                        className="hover:cursor-pointer"
                    >
                        <span className="font-bold text-2xl tracking-tight text-black">
                            J Realty Group
                        </span>
                    </a>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 "
                        onClick={toggleMenu}
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full ${
                        isMenuOpen ? "block" : "hidden"
                    } flex-grow lg:flex lg:items-center lg:w-auto`}
                >
                    <div className="text-lg lg:flex-grow justify-center items-center flex">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center mt-4 lg:inline-block lg:mt-0 text-black pr-6 pl-6 hover:bg-gray-50 hover:text-teal-500 rounded-lg py-2 px-4 transition-colors duration-200 hover:cursor-pointer"
                        >
                            <span className="mr-1">Exit the listings</span>
                            <div className="flex justify-center items-center">
                                <BsHouseDoor className="w-4 h-4" />
                            </div>
                        </button>
                    </div>

                    <div>
                        <a
                            href="https://calendly.com/jayrealtygroup/30min"
                            className="inline-block px-5 py-3 text-lg leading-none text-white bg-teal-500 border rounded transition-colors duration-300 hover:text-teal-500 hover:border hover:border-teal-500 hover:bg-white mt-4 lg:mt-0"
                            target="_blank"
                        >
                            Book a Call
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Listingsheader;
