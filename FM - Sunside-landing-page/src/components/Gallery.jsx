import React from "react";
import GalleryImages from "../constants/GalleryImages";

const Gallery = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4">
            <picture>
                <source
                    media="(min-width:768px)"
                    srcSet={GalleryImages.milkBottle.desktop}
                />
                <img src={GalleryImages.milkBottle.mobile} alt="" />
            </picture>
            <picture>
                <source
                    media="(min-width:768px)"
                    srcSet={GalleryImages.orange.desktop}
                />
                <img src={GalleryImages.orange.mobile} alt="" />
            </picture>
            <picture>
                <source
                    media="(min-width:768px)"
                    srcSet={GalleryImages.cone.desktop}
                />
                <img src={GalleryImages.cone.mobile} alt="" />
            </picture>
            <picture>
                <source
                    media="(min-width:768px)"
                    srcSet={GalleryImages.sugarcube.desktop}
                />
                <img src={GalleryImages.sugarcube.mobile} alt="" />
            </picture>
        </div>
    );
};

export default Gallery;
