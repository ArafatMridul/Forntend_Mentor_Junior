import React from "react";

const Work = ({ mobile, desktop, heading, description, id }) => {
    return (
        <div className="relative">
            <picture>
                <source media="(min-width:768px)" srcSet={desktop} />
                <img src={mobile} alt="" />
            </picture>
            <div className="absolute bottom-0 flex flex-col gap-8 md:gap-2 lg:gap-8 px-4 py-12 md:py-4 lg:py-16 text-center lg:ml-[50%] lg:-translate-x-1/2">
                <h2 className={`font-fraunces font-fw-fraunces-bold text-[1.75rem] md:text-[1.5rem] lg:text-[2rem] ${id === 1 ? "text-graphic" : "text-photography"}`}>{heading}</h2>
                <p className={`font-barlow font-fw-barlow text-[1rem] lg:text-[1.15rem] lg:w-[40ch] ${id === 1 ? "text-graphic" : "text-photography"}`}>{description}</p>
            </div>
        </div>
    );
};

export default Work;
