import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Header = ({open, setOpen}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="fixed top-0 left-0 right-0 max-w-[1440px] mx-auto px-6 py-8 md:px-6 md:py-12 bg-[#3EBFFF] flex items-center justify-between z-50">
            <a href="/">
                <img src={logo} alt="logo" className="" />
            </a>
            
            <ul className="hidden text-[1.1rem] font-barlow font-fw-barlow text-white md:flex md:items-center md:gap-12 md:ml-auto">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#" className="text-blue-4 bg-white border-none outline-none font-fraunces border px-6 py-4 rounded-full uppercase hover:bg-opacity-30 hover:text-white transition-all">Contact</a></li>
            </ul>

            <ul id="slidebar" className={`absolute flex flex-col gap-8 p-12 items-center text-[1.5rem] text-blue-2 font-barlow font-fw-barlow right-6 left-6 bg-white ${expanded ? "top-[110px]" : "top-[-400px]"} transition-[top] duration-300 ease-in-out md:hidden`}>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#" className="block text-blue-4 text-[1.25rem] bg-yellow border-none outline-none font-fraunces border px-8 py-4 rounded-full uppercase md:hidden">Contact</a></li>
                
                <div className="absolute top-0 right-0 -translate-y-[50%] w-0 h-0 border-t-[30px] border-t-transparent border-r-[30px] border-r-white border-b-[30px] border-b-transparent"></div>
            </ul>

            <svg
                width="24"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className={`cursor-pointer transition-opacity duration-300 md:hidden ${expanded ? "opacity-60" : "opacity-100"}`}
                onClick={() => {
                    setExpanded(prev => !prev);
                }}
            >
                <path
                    d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
                    fill="#FFF"
                />
            </svg>
        </div>
    );
};

export default Header;
