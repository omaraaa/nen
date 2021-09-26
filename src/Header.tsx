import React from "react";
import {
    Link
} from "react-router-dom";
export default function Header() {
    return (
        <header className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex space-x-6 items-center">
            <Link to="/" className="flex">
                <h1 className="font-mono text-5xl font-serif font-bold ml-4 leading-tight m-auto">
                    NEN
                </h1>
            </Link>

            <Link to="/about" className="font-mono leading-tight m-auto hover:text-gray-900 transition-colors duration-200 text-gray-900 hover:bg-gray-200 rounded-sm p-2">
                About
            </Link>

            <Link to="/services" className="font-mono leading-tight m-auto hover:text-gray-900 transition-colors duration-200 text-gray-900 hover:bg-gray-200 rounded-sm p-2">
                Services
            </Link>
        </header>
    )
}