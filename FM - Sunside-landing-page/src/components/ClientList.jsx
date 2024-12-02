import React from "react";
import Client from "./Client";
import clientDetails from "../constants/ClientDetails";

const ClientList = () => {
    return (
        <div className="mt-16 lg:mt-[8rem]">
            <h2 className="font-fraunces font-fw-fraunces-bold tracking-[0.3rem] text-center lg:text-[1.25rem] text-blue-1 uppercase">
                client testimonials
            </h2>
            <div className="grid gap-16 md:gap-2 lg:gap-8 py-16 lg:py-20 lg:pb-40 lg:px-[6rem] md:grid-cols-3">
                <Client
                    image={clientDetails.emily.image}
                    comment={clientDetails.emily.comment}
                    name={clientDetails.emily.name}
                    post={clientDetails.emily.post}
                />
                <Client
                    image={clientDetails.jennie.image}
                    comment={clientDetails.jennie.comment}
                    name={clientDetails.jennie.name}
                    post={clientDetails.jennie.post}
                />
                <Client
                    image={clientDetails.thomas.image}
                    comment={clientDetails.thomas.comment}
                    name={clientDetails.thomas.name}
                    post={clientDetails.thomas.post}
                />
            </div>
        </div>
    );
};

export default ClientList;
