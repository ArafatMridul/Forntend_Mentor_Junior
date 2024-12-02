import mobileEggImg from "../assets/images/mobile/image-transform.jpg";
import desktopEggImg from "../assets/images/desktop/image-transform.jpg";

import mobileGlassImg from "../assets/images/mobile/image-stand-out.jpg";
import desktopGlassImg from "../assets/images/desktop/image-stand-out.jpg";

export default {
    egg: {
        id: 1,
        image: {
            mobile: mobileEggImg,
            desktop: desktopEggImg,
        },
        heading: "Transform your brand",
        description:
            "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        accent: "yellow",
    },
    glass: {
        id: 2,
        image: {
            mobile: mobileGlassImg,
            desktop: desktopGlassImg,
        },
        heading: "Stand out to the right audience",
        description:
            "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
        accent: "softRed",
    },
};

