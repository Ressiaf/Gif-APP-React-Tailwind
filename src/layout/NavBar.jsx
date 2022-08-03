import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
const NavBar = () => {
    return (
        <>
        <nav className=" flex  min-w-screen font-robo ">
            <div className=" bg-gradient-to-br from-purple-600 to-blue-500 overflow-hidden py-2 px-4 w-full">
            <div className="flex  justify-between">
                <h1 className="text-6xl ">
                GIF
                <span className=" text-2xl">NaN *</span>
                </h1>
                <button>
                    <MenuIcon className="text-black w-12 "/>
                </button>
            </div>
            </div>
        </nav>
        </>
    );
};

export default NavBar;
