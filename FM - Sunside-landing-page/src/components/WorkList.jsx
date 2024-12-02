import React from "react";
import workDetails from "../constants/WorkDetails";
import Work from "./Work";

const WorkList = () => {
    return (
        <div className="grid md:grid-cols-2">
            <Work
                mobile={workDetails.cherry.image.mobile}
                desktop={workDetails.cherry.image.desktop}
                heading={workDetails.cherry.heading}
                description={workDetails.cherry.desciption}
                id={workDetails.cherry.id}
            />

            <Work
                mobile={workDetails.orange.image.mobile}
                desktop={workDetails.orange.image.desktop}
                heading={workDetails.orange.heading}
                description={workDetails.orange.desciption}
                id={workDetails.orange.id}
            />
        </div>
    );
};

export default WorkList;
