import React from "react";
import productDetails from "../constants/ProductDetails";
import Product from "./Product";

const ProductList = () => {
    return (
        <div>
            <Product
                mobile={productDetails.egg.image.mobile}
                desktop={productDetails.egg.image.desktop}
                heading={productDetails.egg.heading}
                description={productDetails.egg.description}
                id={productDetails.egg.id}
            />

            <Product
                mobile={productDetails.glass.image.mobile}
                desktop={productDetails.glass.image.desktop}
                heading={productDetails.glass.heading}
                description={productDetails.glass.description}
                id={productDetails.glass.id}
            />
        </div>
    );
};

export default ProductList;
