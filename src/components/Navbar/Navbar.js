import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg
                        className="fill-current h-8 w-8 mr-2"
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span className="font-bold text-2xl tracking-tight text-black">
                        J Realty Group
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400  "
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
                    <div className="text-lg lg:flex-grow">
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-black pr-6 pl-6 hover:bg-gray-50 hover:text-teal-500 rounded-lg py-2 px-4 transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-black pr-6 pl-6 hover:bg-gray-50 hover:text-teal-500 rounded-lg py-2 px-4 transition-colors duration-200"
                        >
                            Listings
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-black pr-6 pl-6 hover:bg-gray-50 hover:text-teal-500 rounded-lg py-2 px-4 transition-colors duration-200"
                        >
                            Testimonies
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="inline-block px-5 py-3 text-lg leading-none text-black bg-teal-500 border rounded transition-colors duration-300 hover:text-black hover:border hover:border-black hover:bg-white mt-4 lg:mt-0"
                        >
                            jayrealtygroup@gmail.com
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
