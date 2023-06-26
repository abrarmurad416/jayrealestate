import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { BsHouseDoor } from "react-icons/bs";

const Listings = () => {
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

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div
                className={`sticky top-0 z-50 ${
                    hasScrolled ? "shadow-md" : ""
                }`}
            >
                <nav className="flex items-center justify-between flex-wrap bg-white p-4">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <svg
                            className="fill-current h-8 w-8 mr-2"
                            width="54"
                            height="54"
                            viewBox="0 0 54 54"
                            xmlns="http://www.w3.org/2000/svg"
                        ></svg>{" "}
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
                                href="https://calendly.com/abrarmurad/30min"
                                className="inline-block px-5 py-3 text-lg leading-none text-white bg-teal-500 border rounded transition-colors duration-300 hover:text-teal-500 hover:border hover:border-teal-500 hover:bg-white mt-4 lg:mt-0"
                                target="_blank"
                            >
                                Schedule a Call
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex items-center justify-center mt-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <Card className="mt-6 w-96">
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img
                                src="/images/woodbridgebasement.png"
                                alt="woodbridgebasement"
                                className="w-full h-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-2"
                            >
                                Woodbridge Basement for Rent{" "}
                                <span className="text-green-500">
                                    $1,550.00
                                </span>
                            </Typography>
                            <Typography className="mb-2 border-b-4 border-teal-500 hover:text-blue-500">
                                <a
                                    href="https://shorturl.at/iEFKT"
                                    target="_blank"
                                >
                                    {" "}
                                    28 Cairnburg Pl, Vaughan, L4L 3L5
                                </a>
                            </Typography>
                            <Typography>
                                Prestigious Area! <br />• Full credit report{" "}
                                <br />• Job letter
                                <br />• Identification <br />• Job and landlord
                                reference required
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <div>
                                <Button
                                    className="bg-teal-500"
                                    onClick={openModal}
                                >
                                    Read More
                                </Button>
                                <Modal
                                    isOpen={isOpen}
                                    onRequestClose={closeModal}
                                    contentLabel="Example Modal"
                                    className="fixed inset-0 flex items-center justify-center"
                                    overlayClassName="fixed inset-0 bg-gray-50"
                                >
                                    <section
                                        className="w-[80vw] bg-white p-6 rounded-lg shadow-md z-50"
                                        id="sectionmodal"
                                    >
                                        <h2 className="font-bold">
                                            Basement | Bedrooms: 1 + Den |
                                            Bathrooms: 1
                                        </h2>
                                        <br />
                                        <div class="relative overflow-x-auto  sm:rounded-lg">
                                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                                                        >
                                                            Overview
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="px-6 py-3"
                                                        >
                                                            Details
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                                                        >
                                                            The Unit
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="px-6 py-3"
                                                        >
                                                            Details
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                                                        >
                                                            Utilities Included
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            Not Included
                                                        </td>
                                                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                            Size (sqft)
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            800
                                                        </td>
                                                    </tr>
                                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                                                        >
                                                            Wi-Fi and More
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            Not Included
                                                        </td>
                                                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                            Furnished
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Yes
                                                        </td>
                                                    </tr>
                                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                                                        >
                                                            Parking Included
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            1
                                                        </td>
                                                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                            Appliances
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Not Included
                                                        </td>
                                                    </tr>
                                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                                        <th
                                                            scope="row"
                                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                                                        >
                                                            Agreement Type
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            1 year
                                                        </td>
                                                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-8000">
                                                            Air Conditioning
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Yes
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th
                                                            scope="row"
                                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                                                        >
                                                            Move-in Date
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            June 15, 2023
                                                        </td>
                                                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                            Personal Outdoor
                                                            Space
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Not Included
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th
                                                            scope="row"
                                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                                                        >
                                                            Pet Friendly
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            No
                                                        </td>
                                                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                            Smoking Permitted
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Outdoors only
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                        <Button
                                            onClick={closeModal}
                                            className="bg-red-500 mx-2"
                                        >
                                            Go Back
                                        </Button>
                                        <Button className="bg-deep-purple-500 mx-2">
                                            <a
                                                href="https://www.kijiji.ca/v-view-details.html?adId=1661522541"
                                                target="_blank"
                                            >
                                                Kijiji listing
                                            </a>
                                        </Button>
                                    </section>
                                </Modal>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Listings;
