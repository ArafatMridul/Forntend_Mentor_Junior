import React from "react";

const Client = ({ image, comment, name, post }) => {
    return (
        <div className="flex flex-col items-center gap-8 lg:gap-12 text-center px-6">
            <img src={image} alt="client-img" className="w-16 h-16 rounded-full"/>
            <p className="font-barlow font-fw-barlow text-blue-3 text-[1.12rem]">{comment}</p>
            <div>
                <p className="font-fraunces font-fw-fraunces-bold text-blue-4 text-[1.25rem] mb-2">{name}</p>
                <p className="font-barlow font-fw-barlow text-blue-1">{post}</p>
            </div>
        </div>
    );
};

export default Client;
