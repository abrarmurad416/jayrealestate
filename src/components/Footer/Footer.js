import React from "react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <div className="mt-20">
                <footer class="bg-slate-950">
                    <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                        <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                            <a
                                class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
                                href="#MainContent"
                                onClick={scrollToTop}
                            >
                                <span class="sr-only">Back to top</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div class="lg:flex lg:items-end lg:justify-between">
                            <div>
                                <h1 className="font-bold text-2xl tracking-tight text-white">
                                    J Realty Group
                                </h1>
                                <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-200 lg:text-left">
                                    Explore our listings, gain valuable
                                    insights, and embark on a seamless property
                                    experience with us. Your dream home awaits.
                                </p>
                            </div>

                            <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                                <li>
                                    <a
                                        class="text-gray-200 transition hover:text-gray-50"
                                        href="mailto:jayrealtygroup@gmail.com"
                                    >
                                        Email
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-200 transition hover:text-gray-50"
                                        href="https://www.kijiji.ca/o-profile/1010788123/listings/1"
                                        target="_blank"
                                    >
                                        Kijiji Page
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-200 transition hover:text-gray-50"
                                        href="https://www.instagram.com/realtygroup_j/"
                                        target="_blank"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <p class="mt-12 text-center text-sm text-gray-400 lg:text-right">
                            HomeLife Kingsview Real Estate Inc., Brokerage
                        </p>
                        <p class="mt-2 text-center text-sm text-gray-400 lg:text-right">
                            All Rights Reserved J Realty Group
                        </p>
                        <p class="mt-2 text-center text-sm text-gray-400 lg:text-right">
                            <a
                                target="_blank"
                                href="https://www.instagram.com/abrar.murad416/"
                            >
                                Built with 🧰 by @abrar.murad416
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
