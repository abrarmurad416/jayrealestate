import React from "react";

export default function Landing() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className="flex items-center justify-center lg:justify-start">
                <div className="mx-10">
                    <h1 className="text-4xl font-extrabold">
                        Experience{" "}
                        <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                            Unmatched Excellence
                        </span>
                        <br /> in GTA Real Estate
                    </h1>
                    <p className="mt-4 text-black text-justify">
                        Welcome to J Realty Group, where exceptional service
                        meets your real estate needs. With our extensive
                        knowledge of the Greater Toronto Area (GTA) market, we
                        are dedicated to helping you find the perfect home or
                        investment opportunity. Our team of experienced
                        professionals is committed to providing unmatched
                        excellence, guiding you through every step of the real
                        estate process. Whether you're buying, selling, or
                        seeking expert advice, trust J Realty Group to deliver
                        personalized solutions tailored to your unique goals.
                        Experience the difference of working with a reputable
                        real estate company that puts your needs first. Contact
                        us today and let us open the doors to your real estate
                        success.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end mx-10">
                <div className="h-80 lg:h-auto">
                    <img
                        src="/images/Group 1.png"
                        alt="Image"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
