import React from "react";
import mobileHero from "../assets/images/mobile/image-header.jpg";
import desktopHero from "../assets/images/desktop/image-header.jpg";
import ProductList from "./ProductList";
import downArrow from "../assets/images/icon-arrow-down.svg";
import WorkList from "./WorkList";
import ClientList from "./ClientList";
import Gallery from "./Gallery";

const Hero = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div>
                <picture>
                    <source media="(min-width:768px)" srcSet={desktopHero} />
                    <img src={mobileHero} alt="" />
                </picture>
                <div className="absolute top-[140px] lg:top-[200px] left-1/2 -translate-x-1/2 w-full text-center">
                    <h1 className="font-fraunces font-fw-fraunces-bold text-white text-[2.75rem] md:text-[2.25rem] lg:text-[4rem] leading-[3.5rem] uppercase tracking-widest">
                        we are creatives
                    </h1>
                    <img
                        src={downArrow}
                        alt="down-arrow"
                        className="mx-auto mt-8 md:mt-4 lg:mt-[6.5rem]"
                    />
                </div>
            </div>
            <ProductList />
            <WorkList />
            <ClientList />
            <Gallery />
        </div>
    );
};

export default Hero;
