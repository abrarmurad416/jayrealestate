import React from "react";
import ReviewsData from "./ReviewsData";

const Reviews = () => {
    const underline =
        process.env.PUBLIC_URL + "/images/undraw_double-underline.svg";
    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <h1
                id="testimonials"
                className="text-center text-4xl font-extrabold"
            >
                Insights from{" "}
                <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                    Satisfied
                </span>{" "}
                Real Estate Clients
            </h1>
            <div className="flex justify-center">
                <img className="mt-4 w-16" src={underline} alt="underline" />
            </div>
            <br />
            <br />
            <section class="bg-white p-8">
                <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 shadow-md">
                    {ReviewsData.map((item, index) => (
                        <figure class="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 border-r border-teal-500 border-t border-l">
                            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-black ">
                                    {item.hook}
                                </h3>
                                <p class="my-4">{item.review}</p>
                            </blockquote>
                            <figcaption class="flex justify-center items-center space-x-3">
                                <img
                                    class="w-9 h-9 rounded-full"
                                    src="/images/user.png"
                                    alt="profile picture"
                                />
                                <div class="space-y-0.5 font-medium text-black text-left">
                                    <div>{item.name}</div>
                                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        {item.subtext}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Reviews;
