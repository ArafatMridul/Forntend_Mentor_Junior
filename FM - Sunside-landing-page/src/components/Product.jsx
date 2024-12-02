import React from "react";

const Product = ({ desktop, mobile, heading, description, id }) => {
    return (
        <div className={`grid md:grid-cols-2 md:grid-rows-1`}>
            <picture>
                <source media="(min-width:768px)" srcSet={desktop} />
                <img src={mobile} alt="" className={`${id === 2 ? "md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1" : ""}`} />
            </picture>
            <div className={`px-5 py-16 md:py-4 md:my-auto text-center flex flex-col gap-8 md:gap-4 lg:p-[8.5rem] md:text-start ${id === 1 ? "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1" : ""}`}>
                <h2 className="font-fraunces font-fw-fraunces-bold text-[2.25rem] md:text-[1.75rem] leading-10 text-blue-4 lg:text-[3rem] lg:leading-[1.15]">
                    {heading}
                </h2>
                <p className="text-lg md:text-[1rem] lg:text-lg font-barlow font-fw-barlow text-blue-2">{description}</p>
                <p className={`w-fit mx-auto cursor-pointer relative font-fraunces font-fw-fraunces-bold uppercase text-blue-4 md:ml-3 after:content-[''] after:absolute after:top-4 after:left-0 after:ml-[50%] after:-translate-x-[50%] after:w-[8.5rem] after:h-4 ${id === 1? "after:bg-yellow" : "after:bg-softRed"} after:opacity-40 after:rounded-full after:hover:opacity-80 after:hover:top-6 after:cursor-pointer after:transition-all after:duration-300 tracking-wide`}>learn more</p>
            </div>
        </div>
    );
};

export default Product;
