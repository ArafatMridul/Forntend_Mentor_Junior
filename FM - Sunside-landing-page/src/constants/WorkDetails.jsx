import mobileCherryImg from "../assets/images/mobile/image-graphic-design.jpg";
import desktopCherryImg from "../assets/images/desktop/image-graphic-design.jpg";

import mobileOrangeImg from "../assets/images/mobile/image-photography.jpg";
import desktopOrangeImg from "../assets/images/desktop/image-photography.jpg";

export default {
    cherry: {
        id: 1,
        image: {
            mobile: mobileCherryImg,
            desktop: desktopCherryImg,
        },
        heading: "Graphic design",
        desciption:
            "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
        color: "graphic",
    },
    orange: {
        id: 2,
        image: {
            mobile: mobileOrangeImg,
            desktop: desktopOrangeImg,
        },
        heading: "Photography",
        desciption:
            "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        color: "photography",
    },
};
